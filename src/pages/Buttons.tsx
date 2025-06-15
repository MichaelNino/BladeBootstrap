
import { useMemo } from 'react';
import { blade } from '../lib/blade';
import { highlightBladeSyntax } from '../lib/highlight';

const Buttons = () => {
  const template = `
    <h1>Buttons</h1>
    <p class="lead">Examples of Bootstrap 5 buttons rendered via Blade.</p>
    <p>These buttons are generated dynamically using a <code>@foreach</code> loop in the Blade template.</p>

    <h2 class="mt-4">Standard Buttons</h2>
    <div class="d-flex flex-wrap gap-2">
      @foreach (const color of buttonColors)
        <button type="button" class="btn btn-{{ color }}">{{ color.charAt(0).toUpperCase() + color.slice(1) }}</button>
      @endforeach
    </div>

    <h2 class="mt-4">Outline Buttons</h2>
    <div class="d-flex flex-wrap gap-2">
      @foreach (const color of buttonColors)
        <button type="button" class="btn btn-outline-{{ color }}">{{ color.charAt(0).toUpperCase() + color.slice(1) }}</button>
      @endforeach
    </div>
    
    <h2 class="mt-4">Sizes</h2>
    <div class="d-flex flex-wrap gap-2 align-items-center">
      <button type="button" class="btn btn-primary btn-lg">Large button</button>
      <button type="button" class="btn btn-secondary">Default size</button>
      <button type="button" class="btn btn-success btn-sm">Small button</button>
    </div>
    
    <h2 class="mt-4">With Icons</h2>
    <div class="d-flex flex-wrap gap-2">
      <button type="button" class="btn btn-primary">
        <i class="bi bi-check-circle-fill me-2"></i> Primary
      </button>
      <button type="button" class="btn btn-warning">
        <i class="bi bi-exclamation-triangle-fill me-2"></i> Warning
      </button>
       <button type="button" class="btn btn-danger">
        <i class="bi bi-trash-fill me-2"></i> Delete
      </button>
    </div>
  `;

  const data = {
    buttonColors: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
  };

  const renderedHtml = useMemo(() => {
    try {
      return blade.render(template, data);
    } catch (e) {
      return `<p class="text-danger">Error rendering template.</p>`
    }
  }, [template, data]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />
      <hr className="my-5" />
      <h2 className="mb-3">Blade Template</h2>
      <pre className="p-3 bg-dark text-white rounded-3"><code dangerouslySetInnerHTML={{ __html: highlightBladeSyntax(template.trim()) }} /></pre>
    </div>
  );
};

export default Buttons;
