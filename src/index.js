import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { BrowserRouter, Route } from 'react-router-dom';

import './root.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
