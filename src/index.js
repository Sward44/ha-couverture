import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.scss";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Lato:300,400,700", "sans-serif"],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
