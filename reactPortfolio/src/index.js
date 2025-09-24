import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import Provider from "./Context/Portfolio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  </>
);
