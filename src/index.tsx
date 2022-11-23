import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Todo } from "./Module/Todo/Todo";

export const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

class GetTime extends React.Component {

  render() {
    let date = new Date()
    return (
      <div>
        Time is {date.toTimeString()}
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <Todo />
    <GetTime />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
