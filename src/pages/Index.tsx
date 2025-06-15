
const Index = () => {
  return (
    <div>
      <h1 className="display-5">Bootstrap 5 UI Library with Blade</h1>
      <p className="lead mt-3">
        This is a demonstration of a user interface library for Bootstrap 5, built using a custom JavaScript-based Blade templating engine.
      </p>
      <hr className="my-4" />
      <p>
        The components are rendered from Blade template strings into HTML, which is then styled by Bootstrap's CSS. The interactivity, like for modals, is handled by Bootstrap's own JavaScript.
      </p>
      <p>
        Use the navigation on the left to explore the available components or to experiment in the live playground.
      </p>
    </div>
  );
};

export default Index;
