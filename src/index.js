import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import {createMockServer} from "./mock";

createMockServer()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
