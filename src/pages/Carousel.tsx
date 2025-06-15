
import { useMemo } from 'react';
import { blade } from '../lib/blade';
import { highlightBladeSyntax } from '../lib/highlight';

const Carousel = () => {
  const template = `
    <h1>Carousel</h1>
    <p class="lead">A slideshow component for cycling through elements—images or slides of text—like a carousel. Below is an example of a Bootstrap 5 carousel rendered via Blade.</p>

    <div id="carouselExampleCaptions" class="carousel slide mt-4" data-bs-ride="carousel">
      <div class="carousel-indicators">
        @foreach(const [index, slide] of slides.entries())
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="{{ index }}" class="{{ index === 0 ? 'active' : '' }}" aria-current="{{ index === 0 ? 'true' : 'false' }}" aria-label="Slide {{ index + 1 }}"></button>
        @endforeach
      </div>
      <div class="carousel-inner">
        @foreach(const [index, slide] of slides.entries())
          <div class="carousel-item {{ index === 0 ? 'active' : '' }}">
            <img src="{{ slide.image }}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block text-body-emphasis">
              <h5 class="fw-bold">{{ slide.title }}</h5>
              <p>{{ slide.caption }}</p>
            </div>
          </div>
        @endforeach
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `;

  const data = {
    slides: [
      {
        image: 'https://placehold.co/800x400/0d6efd/white?text=First+Slide',
        title: 'First slide label',
        caption: 'Some representative placeholder content for the first slide.',
      },
      {
        image: 'https://placehold.co/800x400/6c757d/white?text=Second+Slide',
        title: 'Second slide label',
        caption: 'Some representative placeholder content for the second slide.',
      },
      {
        image: 'https://placehold.co/800x400/198754/white?text=Third+Slide',
        title: 'Third slide label',
        caption: 'Some representative placeholder content for the third slide.',
      },
    ]
  };

  const renderedHtml = useMemo(() => {
    try {
      return blade.render(template, data);
    } catch (e) {
      console.error(e);
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

export default Carousel;
