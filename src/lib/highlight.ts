
export const highlightBladeSyntax = (code: string): string => {
  // First, escape all HTML special characters to prevent XSS.
  const escapedCode = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  // Then, wrap Blade directives in a span for highlighting.
  // Order of regex alternatives can matter for nested/overlapping patterns,
  // but for this set of directives, it's straightforward.
  return escapedCode.replace(
    /(@\w+(?:\s*\([^)]*\))?|{{--.*?--}}|{!!.*?!!}|{{.*?}})/g,
    '<span class="text-warning">$&</span>'
  );
};
