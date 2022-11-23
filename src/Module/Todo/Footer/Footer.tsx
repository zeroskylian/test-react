import React, { Component } from 'react'
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { Checkbox } from "antd";

export class TodoFooter extends Component {

  private handleCheckChange = (event: CheckboxChangeEvent) => {
    let value = event.target.checked;
    console.log(value);
  };

  render() {
    return (
      <div>
        <Checkbox />{" "}
        <span>已完成/全部</span>
      </div>
    )
  }
}
