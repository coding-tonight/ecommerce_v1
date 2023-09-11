import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from "./Router/App.jsx";
// import store from './Redux/Store/index.js'
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
