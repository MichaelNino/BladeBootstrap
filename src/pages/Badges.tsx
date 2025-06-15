
import { useMemo } from 'react';
import { blade } from '../lib/blade';
import { highlightBladeSyntax } from '../lib/highlight';

const Badges = () => {
  const template = `
    <h1>Badges</h1>
    <p class="lead">Examples of Bootstrap 5 badges rendered via Blade.</p>

    <h2 class="mt-4">Examples</h2>
    @foreach(const color of colors)
      <span class="badge text-bg-{{ color }} me-1">{{ color.charAt(0).toUpperCase() + color.slice(1) }}</span>
    @endforeach

    <h2 class="mt-4">Pill badges</h2>
    @foreach(const color of colors)
      <span class="badge rounded-pill text-bg-{{ color }} me-1">{{ color.charAt(0).toUpperCase() + color.slice(1) }}</span>
    @endforeach

    <h2 class="mt-4">Badges on Buttons</h2>
    <div class="mt-2">
      <button type="button" class="btn btn-primary">
        Notifications <span class="badge text-bg-secondary">4</span>
      </button>
    </div>
  `;

  const data = {
    colors: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
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

export default Badges;
