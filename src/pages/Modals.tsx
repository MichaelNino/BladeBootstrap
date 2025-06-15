
import { useMemo } from 'react';
import { blade } from '../lib/blade';
import { highlightBladeSyntax } from '../lib/highlight';

const Modals = () => {
  const template = `
    <h1>Modals</h1>
    <p class="lead">A Bootstrap 5 modal rendered via Blade. The interactivity is handled by the Bootstrap JS bundle.</p>
    <p>All the content, including the modal ID, title, and body, is passed from a data object into the template.</p>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-{{ button.style }}" data-bs-toggle="modal" data-bs-target="#{{ modal.id }}">
      {{ button.text }}
    </button>

    <!-- Modal -->
    <div class="modal fade" id="{{ modal.id }}" tabindex="-1" aria-labelledby="{{ modal.id }}Label" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="{{ modal.id }}Label">{{ modal.title }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {!! modal.body !!}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const data = {
    button: {
      style: 'success',
      text: 'Launch Demo Modal'
    },
    modal: {
      id: 'exampleModal',
      title: 'Modal Title from Blade',
      body: 'This is the modal body content. It is passed as <strong>raw HTML</strong> from the data object using the <code>{!! ... !!}</code> syntax.'
    }
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

export default Modals;
