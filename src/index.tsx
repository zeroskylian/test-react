import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import TestMemo from "./Module/HOOK/TestMemo";
import TestMemoUseEffect from './Module/HOOK/TestMemoUseMemo'
import TestMemo2 from "./Module/HOOK/TestMemo2";
import TestMemo2Better from "./Module/HOOK/TestMemo2Better";

// import TestAJAX from "./Module/AJAX/TestAJAX";
// import RenderPropsDemo from "./Module/RenderProps/RenderProps";

export const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<React.StrictMode>
  <TestMemo2Better />
</React.StrictMode>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();