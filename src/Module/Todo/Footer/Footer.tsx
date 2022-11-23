import React, { Component } from "react";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { Checkbox, Button } from "antd";
import { TodoItem } from "../Todo";

interface TodoFooterProps {
  list: TodoItem[];
  selectAllCallback: (value: boolean) => void;
  deleteAlldoneCallback: () => void;
}
export class TodoFooter extends Component<TodoFooterProps> {
  private handleCheckChange = (event: CheckboxChangeEvent) => {
    let value = event.target.checked;
    this.props.selectAllCallback(value);
  };

  private handleDeleteAll = () => {
    if (window.confirm("是否删除全部")) {
      this.props.deleteAlldoneCallback();
    }
  };

  render() {
    let done = this.props.list.reduce((pre, todo) => {
      return pre + (todo.done ? 1 : 0);
    }, 0);
    let all = this.props.list.length;
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Checkbox checked={done === all} onChange={this.handleCheckChange} />{" "}
          <span>
            已完成{done}/全部{all}
          </span>
        </div>
        <Button danger onClick={this.handleDeleteAll}>
          删除全部
        </Button>
      </div>
    );
  }
}
