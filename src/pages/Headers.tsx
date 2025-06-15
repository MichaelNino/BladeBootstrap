
import { useMemo } from 'react';
import { blade } from '../lib/blade';
import { highlightBladeSyntax } from '../lib/highlight';

const Headers = () => {
  const template = `
    <h1>Headers</h1>
    <p class="lead">An example of a Bootstrap 5 header rendered via Blade.</p>

    <header class="p-3 text-bg-dark mt-4" style="border-radius: var(--bs-border-radius);">
        <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            @foreach(const item of navItems)
                <li><a href="#" class="nav-link px-2 {{ item.active ? 'text-secondary' : 'text-white' }}">{{ item.text }}</a></li>
            @endforeach
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
            </form>

            <div class="text-end">
                <button type="button" class="btn btn-outline-light me-2">Login</button>
                <button type="button" class="btn btn-warning">Sign-up</button>
            </div>
        </div>
        </div>
    </header>
  `;

  const data = {
    navItems: [
        { text: "Home", active: true },
        { text: "Features", active: false },
        { text: "Pricing", active: false },
        { text: "FAQs", active: false },
        { text: "About", active: false },
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

export default Headers;
