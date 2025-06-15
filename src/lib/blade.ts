
/**
 * A helper function to escape HTML characters.
 */
function escapeHtml(str: any): string {
  if (str === null || str === undefined) {
    return "";
  }
  const text = String(str);
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * A simple implementation of Laravel's Blade templating engine in JavaScript.
 */
class Blade {
  private cache: Map<string, (data: object) => string> = new Map();

  /**
   * Compiles a Blade template string into a JavaScript function.
   */
  private compile(template: string): (data: object) => string {
    if (this.cache.has(template)) {
      return this.cache.get(template)!;
    }

    // First, we convert Blade syntax to an intermediate format.
    const processed = template
      .replace(/\{\{--.*?--\}\}/g, "") // Comments: {{-- ... --}}
      .replace(/\{!!\s*(.*?)\s*!!\}/g, "<% r.push(String($1)) %>") // Raw echo: {!! ... !!}
      .replace(/\{\{\s*(.*?)\s*\}\}/g, "<% r.push(escape($1)) %>") // Escaped echo: {{ ... }}
      .replace(/@foreach\s*\((.*)\)/g, "<% for ($1) { %>") // @foreach
      .replace(/@endforeach/g, "<% } %>") // @endforeach
      .replace(/@if\s*\((.*)\)/g, "<% if ($1) { %>") // @if
      .replace(/@elseif\s*\((.*)\)/g, "<% } else if ($1) { %>") // @elseif
      .replace(/@else/g, "<% } else { %>") // @else
      .replace(/@endif/g, "<% } %>"); // @endif

    // Now, we build a function body from the intermediate format.
    let finalCode = "const r = [];\nwith(data) {\n";
    let cursor = 0;
    while (cursor < processed.length) {
      const openTagIndex = processed.indexOf("<%", cursor);
      if (openTagIndex === -1) {
        const text = processed.slice(cursor);
        if (text) {
          finalCode += `r.push(\`${text.replace(/`/g, "\\`")}\`);\n`;
        }
        break;
      }

      const textBeforeTag = processed.slice(cursor, openTagIndex);
      if (textBeforeTag) {
        finalCode += `r.push(\`${textBeforeTag.replace(/`/g, "\\`")}\`);\n`;
      }

      const closeTagIndex = processed.indexOf("%>", openTagIndex);
      if (closeTagIndex === -1) {
        throw new Error("Unclosed Blade tag in template");
      }

      const jsCode = processed.slice(openTagIndex + 2, closeTagIndex).trim();
      finalCode += `${jsCode}\n`;

      cursor = closeTagIndex + 2;
    }

    finalCode += '}\nreturn r.join("");';

    try {
      const func = new Function("data", "escape", finalCode);
      const compiledFunc = (data: object) => func(data, escapeHtml);
      this.cache.set(template, compiledFunc);
      return compiledFunc;
    } catch (e) {
      console.error("Could not compile template:", e);
      if (e instanceof Error) {
        console.error("Generated code:", finalCode);
        return () => `Error compiling template: ${e.message}`;
      }
      return () => "An unknown error occurred during compilation.";
    }
  }

  /**
   * Renders a Blade template with the given data.
   */
  public render(template: string, data: object = {}): string {
    const compiled = this.compile(template);
    try {
      return compiled(data);
    } catch (e) {
      console.error("Error rendering template:", e);
      if (e instanceof Error) {
        return `<p class="text-red-500">Error rendering template: ${e.message}</p>`;
      }
      return '<p class="text-red-500">An unknown error occurred during rendering.</p>';
    }
  }
}

export const blade = new Blade();
