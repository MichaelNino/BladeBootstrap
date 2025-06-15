
import { useMemo } from 'react';
import { blade } from '../lib/blade';
import { highlightBladeSyntax } from '../lib/highlight';

const Jumbotron = () => {
  const template = `
    <h1>Jumbotron</h1>
    <p class="lead">An example of a Bootstrap 5 jumbotron-like component rendered via Blade.</p>
    <p>With the deprecation of the jumbotron in Bootstrap 5, we now use utility classes to create this effect. The content below is passed dynamically from a data object.</p>

    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">{{ title }}</h1>
        <p class="col-md-8 fs-4">{{ text }}</p>
        <button class="btn btn-{{ buttonStyle }} btn-lg" type="button">{{ buttonText }}</button>
      </div>
    </div>
  `;

  const data = {
    title: "Custom Jumbotron",
    text: "Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.",
    buttonText: "Example Button",
    buttonStyle: "primary"
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

export default Jumbotron;
