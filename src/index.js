import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';

ReactDOM.render(
  <BrowserRouter basename="/My_Portfolio">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
