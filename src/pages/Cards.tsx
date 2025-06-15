
import { useMemo } from 'react';
import { blade } from '../lib/blade';
import { highlightBladeSyntax } from '../lib/highlight';

const Cards = () => {
  const template = `
    <h1>Cards</h1>
    <p class="lead">An example of a Bootstrap 5 card rendered via Blade.</p>
    <p>All the content, including the image source, title, and body text, is passed from a data object into the template.</p>
    
    <div class="card" style="width: 18rem;">
      <img src="{{ card.imageSrc }}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ card.title }}</h5>
        <p class="card-text">{{ card.text }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  `;

  const data = {
    card: {
      imageSrc: 'https://placehold.co/286x180?text=Card+Image',
      title: 'Card Title from Blade',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
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

export default Cards;
