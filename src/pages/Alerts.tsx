
import { useMemo } from 'react';
import { blade } from '../lib/blade';
import { highlightBladeSyntax } from '../lib/highlight';

const Alerts = () => {
  const template = `
    <h1>Alerts</h1>
    <p class="lead">Examples of Bootstrap 5 alerts rendered via Blade.</p>
    <p>These alerts are generated dynamically using a <code>@foreach</code> loop in the Blade template.</p>
    
    @foreach (const color of alertColors)
      <div class="alert alert-{{ color }}" role="alert">
        A simple {{ color }} alert—check it out!
      </div>
    @endforeach
  `;

  const data = {
    alertColors: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
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

export default Alerts;
