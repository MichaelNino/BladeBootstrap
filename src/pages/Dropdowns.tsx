
import { useMemo } from 'react';
import { blade } from '../lib/blade';
import { highlightBladeSyntax } from '../lib/highlight';

const Dropdowns = () => {
  const template = `
    <h1>Dropdowns</h1>
    <p class="lead">An example of a Bootstrap 5 dropdown rendered via Blade.</p>
    <p>The interactivity is handled by the Bootstrap JS bundle.</p>
    
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {{ buttonText }}
      </button>
      <ul class="dropdown-menu">
        @foreach(const item of items)
          <li><a class="dropdown-item" href="#">{{ item }}</a></li>
        @endforeach
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>
  `;

  const data = {
    buttonText: 'Dropdown button',
    items: ['Action', 'Another action', 'Something else here']
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

export default Dropdowns;
