
import { useState, useMemo } from 'react';
import { blade } from '../lib/blade';
import { Textarea } from '@/components/ui/textarea';

const Playground = () => {
  const [template, setTemplate] = useState(
`{{-- Blade Template Playground --}}
<h1>Hello, {{ name }}!</h1>

<p>The time is {{ new Date().toLocaleTimeString() }}.</p>

@if (showList)
  <h2>Here is a list of users:</h2>
  <ul>
    @foreach (const user of users)
      <li>
        {!! user.html !!}
        @if (user.isAdmin)
          <strong>(Admin)</strong>
        @endif
      </li>
    @endforeach
  </ul>
@else
  <p>The list is hidden.</p>
@endif
`);
  const [data, setData] = useState(JSON.stringify({
    name: "Code Compass",
    showList: true,
    users: [
      { html: "<em>John Doe</em>", isAdmin: true },
      { html: "<strong>Jane Smith</strong>", isAdmin: false },
      { html: "<span>Sam Wilson</span>", isAdmin: false },
    ]
  }, null, 2));

  const renderedHtml = useMemo(() => {
    try {
      const parsedData = JSON.parse(data);
      return blade.render(template, parsedData);
    } catch (e) {
      if (e instanceof Error) {
        return `<p class="text-danger">Error parsing data JSON: ${e.message}</p>`;
      }
      return `<p class="text-danger">An unknown error occurred.</p>`;
    }
  }, [template, data]);

  return (
    <div>
      <header className="text-center mb-5">
        <h1 className="display-4">Blade Engine Playground</h1>
        <p className="lead">Test the Blade engine with your own templates and JSON data.</p>
      </header>
      
      <div className="row g-4">
        <div className="col-md-6">
          <h2 className="h4 mb-3">Blade Template</h2>
          <Textarea 
            value={template} 
            onChange={(e) => setTemplate(e.target.value)} 
            className="w-100 font-monospace"
            style={{height: "350px"}}
            placeholder="Enter Blade template here"
          />
        </div>
        <div className="col-md-6">
          <h2 className="h4 mb-3">JSON Data</h2>
          <Textarea 
            value={data} 
            onChange={(e) => setData(e.target.value)} 
            className="w-100 font-monospace"
            style={{height: "350px"}}
            placeholder="Enter JSON data here"
          />
        </div>
      </div>
      
      <div className="mt-5">
        <h2 className="h4 mb-3">Rendered Output</h2>
        <div 
          className="p-4 border rounded-3 bg-body-secondary"
          dangerouslySetInnerHTML={{ __html: renderedHtml }} 
        />
      </div>
    </div>
  );
};

export default Playground;
