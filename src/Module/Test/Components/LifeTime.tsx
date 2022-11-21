import { ThemeContext } from "../../../Const";
import React, { FC } from "react";
import { Button } from "antd";
import "antd/dist/reset.css";

export class News extends React.Component {

  componentDidUpdate(
    prevProps: Readonly<{ name: string }>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log(`Person--componentDidUpdate===${prevProps}===${prevState}`);
  }

  render(): React.ReactNode {
    return (
      <div style={{ marginTop: "20px", marginLeft: "20px", overflow: 'true' }}>
        <ul>
          
        </ul>
      </div>
    );
  }
}
