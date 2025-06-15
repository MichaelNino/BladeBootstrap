
import { useMemo } from 'react';
import { blade } from '../lib/blade';
import { highlightBladeSyntax } from '../lib/highlight';

const Footers = () => {
  const template = `
    <h1>Footers</h1>
    <p class="lead">An example of a Bootstrap 5 footer rendered via Blade.</p>

    <div class="container mt-4">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-body-secondary">&copy; {{ year }} Company, Inc</p>

        <ul class="nav col-md-4 justify-content-end">
          @foreach(const item of navItems)
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">{{ item }}</a></li>
          @endforeach
        </ul>
      </footer>
    </div>
  `;

  const data = {
    year: new Date().getFullYear(),
    navItems: ['Home', 'Features', 'Pricing', 'FAQs', 'About']
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

export default Footers;
