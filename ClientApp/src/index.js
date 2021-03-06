import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import 'antd/dist/antd.css';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
   <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>,
  </React.StrictMode>,
  rootElement
);

registerServiceWorker();
