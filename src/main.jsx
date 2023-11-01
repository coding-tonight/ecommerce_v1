import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from 'react-redux';
import App from "./Router/App.jsx";
import AuthProvider from "./Common/AuthContext/index.jsx";
// import store from './Redux/Store/index.js'
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <AuthProvider>
        <App />
      </AuthProvider>
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
