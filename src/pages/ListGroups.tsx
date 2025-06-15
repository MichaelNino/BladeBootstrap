
import { useMemo } from 'react';
import { blade } from '../lib/blade';
import { highlightBladeSyntax } from '../lib/highlight';

const ListGroups = () => {
  const template = `
    <h1>List Groups</h1>
    <p class="lead">Examples of Bootstrap 5 list groups rendered via Blade.</p>
    
    <h2 class="mt-4">Basic example</h2>
    <ul class="list-group mt-2">
      @foreach(const item of items)
        <li class="list-group-item list-group-item-action">{{ item }}</li>
      @endforeach
    </ul>

    <h2 class="mt-4">With icons</h2>
    <ul class="list-group mt-2">
      @foreach(const item of iconItems)
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          {!! item.icon !!}
          <span>{{ item.text }}</span>
        </li>
      @endforeach
    </ul>

    <h2 class="mt-4">With checkboxes</h2>
    <ul class="list-group mt-2">
      @foreach(const item of checkboxItems)
        <li class="list-group-item">
          <input class="form-check-input me-1" type="checkbox" value="" id="{{ item.id }}" {{ item.checked ? 'checked' : '' }}>
          <label class="form-check-label stretched-link" for="{{ item.id }}">{{ item.label }}</label>
        </li>
      @endforeach
    </ul>

    <h2 class="mt-4">With radio buttons</h2>
    <div class="list-group mt-2">
      @foreach(const item of radioItems)
        <label class="list-group-item">
          <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="{{ item.id }}" {{ item.checked ? 'checked' : '' }}>
          {{ item.label }}
        </label>
      @endforeach
    </div>
  `;

  const data = {
    items: ['An item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'],
    iconItems: [
        { text: 'Profile', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="me-2 text-primary"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' },
        { text: 'Settings', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="me-2 text-primary"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V12a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' },
        { text: 'Messages', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="me-2 text-primary"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' },
        { text: 'Download', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="me-2 text-primary"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' }
    ],
    checkboxItems: [
        { id: 'check1', label: 'An item to be checked', checked: true },
        { id: 'check2', label: 'Another item to be checked', checked: false },
        { id: 'check3', label: 'And a third one', checked: false }
    ],
    radioItems: [
        { id: 'radio1', label: 'Select this item', checked: true },
        { id: 'radio2', label: 'Or select this one', checked: false },
        { id: 'radio3', label: 'But not this one', checked: false }
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

export default ListGroups;
