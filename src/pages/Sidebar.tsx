
import { useMemo } from 'react';
import { blade } from '../lib/blade';
import { highlightBladeSyntax } from '../lib/highlight';

const Sidebar = () => {
  const template = `
    <h1>Sidebars</h1>
    <p class="lead">Examples of Bootstrap 5 sidebars rendered within a page via Blade.</p>
    <p>This demonstrates how you can create a sub-layout with a sidebar, independent of the main application navigation.</p>

    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark mt-4" style="width: 280px; border-radius: var(--bs-border-radius);">
        <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-4">Sidebar Demo</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            @foreach(const item of items)
                @if (item.active)
                    <li class="nav-item">
                        <a href="{{ item.link }}" class="nav-link active" aria-current="page">
                            {{ item.text }}
                        </a>
                    </li>
                @else
                     <li>
                        <a href="{{ item.link }}" class="nav-link text-white">
                            {{ item.text }}
                        </a>
                    </li>
                @endif
            @endforeach
        </ul>
        <hr>
        <div class="dropdown">
            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <strong>mdo</strong>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div>
    </div>
  `;

  const data = {
    items: [
        { text: 'Home', link: '#', active: true },
        { text: 'Dashboard', link: '#', active: false },
        { text: 'Orders', link: '#', active: false },
        { text: 'Products', link: '#', active: false },
        { text: 'Customers', link: '#', active: false },
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

export default Sidebar;
