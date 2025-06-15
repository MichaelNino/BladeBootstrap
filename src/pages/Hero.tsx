
import { useMemo } from 'react';
import { blade } from '../lib/blade';
import { highlightBladeSyntax } from '../lib/highlight';

const Hero = () => {
  const template = `
    <h1>Hero</h1>
    <p class="lead">An example of a Bootstrap 5 hero component rendered via Blade.</p>
    
    <div class="px-4 py-5 my-5 text-center">
      <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
      <h1 class="display-5 fw-bold text-body-emphasis">{{ title }}</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">{{ text }}</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">{{ primaryButton }}</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">{{ secondaryButton }}</button>
        </div>
      </div>
    </div>
  `;

  const data = {
    title: "Centered hero",
    text: "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
    primaryButton: "Primary button",
    secondaryButton: "Secondary"
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

export default Hero;
