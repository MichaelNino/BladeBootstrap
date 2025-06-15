
# Blade UI: A Laravel Blade-inspired Templating Engine for JavaScript

Blade UI is a lightweight, zero-dependency templating engine for JavaScript, heavily inspired by the syntax of **Laravel Blade**. The primary goal of Blade UI is to provide a familiar and powerful templating experience for Laravel developers who are working on front-end applications, such as Single Page Applications (SPAs) built with React, Vue, or other frameworks.

It allows you to write clean, dynamic HTML templates using the same syntax you know and love from the back-end, right in your browser.

## Why Blade UI?

-   **Familiar Syntax**: If you've worked with Laravel, you can start using Blade UI immediately.
-   **Separation of Concerns**: Keep your presentation logic separate from your component's business logic. Instead of complex conditional rendering in JSX, you can use simple Blade directives in a string.
-   **Dynamic Rendering**: Easily render dynamic HTML from a template string and a data object, perfect for content-driven components.
-   **Lightweight**: A single file with no external dependencies, making it easy to integrate into any project.

## How to Use

Using Blade UI is straightforward. You import the `blade` instance, define your template string, provide a data object, and call the `render` method.

Here's a typical usage example within a React component:

```jsx
import { useMemo } from 'react';
import { blade } from './lib/blade'; // Adjust path to blade.ts

const UserProfile = () => {
  const template = `
    <div class="user-profile">
      <h1>Hello, {{ user.name }}!</h1>

      @if (user.isAdmin)
        <p><em>Welcome, Administrator.</em></p>
      @else
        <p>Welcome, user.</p>
      @endif

      <h2>Your Hobbies:</h2>
      <ul>
        @foreach (const hobby of user.hobbies)
          <li>{{ hobby }}</li>
        @endforeach
      </ul>
    </div>
  `;

  const data = {
    user: {
      name: 'Jane Doe',
      isAdmin: true,
      hobbies: ['Reading', 'Hiking', 'Coding']
    }
  };

  // useMemo is recommended to prevent re-rendering on every component update
  const renderedHtml = useMemo(() => {
    try {
      return blade.render(template, data);
    } catch (e) {
      console.error(e);
      return "<p>Error rendering template.</p>";
    }
  }, [template, data]);

  return <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />;
}
```

## Supported Directives

Blade UI supports a core subset of the most common Blade directives:

-   `{{ expression }}`: Echoes the given expression after escaping HTML to prevent XSS attacks.
-   `{!! expression !!}`: Echoes the raw, unescaped result of the given expression. **Use with caution!**
-   `{{-- comment --}}`: A Blade comment that will not be present in the final rendered HTML.
-   `@if (condition)` / `@elseif (condition)` / `@else` / `@endif`: Conditional statements.
-   `@foreach (expression)` / `@endforeach`: `for...of` loops for iterating over arrays.

## Displaying Template Source Code

This project includes a helper function, `highlightBladeSyntax`, to nicely format your Blade template for display on a page. It escapes the HTML and wraps the Blade directives in a styled `<span>`.

```jsx
import { highlightBladeSyntax } from './lib/highlight'; // Adjust path

const MyComponent = () => {
  const template = `<h1>Hello, {{ name }}!</h1>`;
  const highlightedCode = highlightBladeSyntax(template);

  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
};
```

This is how the demo pages in this project display their underlying Blade templates.

## Installation

To run this demonstration project on your local workstation, follow these steps:

1.  **Clone the repository:**
    First, you'll need to clone the project's source code from its GitHub repository.
    ```bash
    # Replace the URL with the actual repository URL
    git clone https://github.com/username/repository.git
    cd repository
    ```

2.  **Install dependencies:**
    This project uses Node.js. You can use npm, yarn, or bun to install the required packages.
    ```bash
    npm install
    ```
    _or_
    ```bash
    yarn install
    ```
    _or_
    ```bash
    bun install
    ```

3.  **Run the development server:**
    Once the dependencies are installed, you can start the local Vite development server.
    ```bash
    npm run dev
    ```
    _or_
    ```bash
    yarn dev
    ```
    _or_
    ```bash
    bun run dev
    ```

4.  **Open in your browser:**
    The application will be running at `http://localhost:8080`. Open this URL in your web browser to see the demo.
