import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppAnalytics } from './Analytics';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
      <BrowserRouter>
         <App initAnalytics={AppAnalytics}/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

