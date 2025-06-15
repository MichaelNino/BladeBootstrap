
import { useMemo } from 'react';
import { blade } from '../lib/blade';
import { highlightBladeSyntax } from '../lib/highlight';

const Breadcrumbs = () => {
  const template = `
    <h1>Breadcrumbs</h1>
    <p class="lead">An example of a Bootstrap 5 breadcrumb component rendered via Blade.</p>
    
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        @foreach(const item of items)
          @if (item.active)
            <li class="breadcrumb-item active" aria-current="page">{{ item.text }}</li>
          @else
            <li class="breadcrumb-item"><a href="{{ item.link }}">{{ item.text }}</a></li>
          @endif
        @endforeach
      </ol>
    </nav>
  `;

  const data = {
    items: [
      { text: 'Home', link: '#', active: false },
      { text: 'Library', link: '#', active: false },
      { text: 'Data', link: '#', active: true }
    ]
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

export default Breadcrumbs;
