import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// import { TestEffectCounter } from "./Module/HOOK/TestHook";
// import TestAJAX from "./Module/AJAX/TestAJAX";
import RenderPropsDemo from "./Module/RenderProps/RenderProps";

export const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RenderPropsDemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
