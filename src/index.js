import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_36 from './App_36';

import { DemoProvider_36 } from './context/DemoContext_36';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DemoProvider_36>
      <App_36 />
    </DemoProvider_36>
  </React.StrictMode>
);

