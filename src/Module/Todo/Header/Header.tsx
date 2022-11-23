import React, { Component } from "react";
import { Input } from "antd";
import { TodoItem } from "../Todo";
import { nanoid } from "nanoid";

interface TodoHeaderProps {
  addTodoCallback: (item: TodoItem) => void;
}

export class TodoHeader extends Component<TodoHeaderProps> {
  state = { text: "" };

  handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && event.currentTarget.value.length > 0) {
      let text = event.currentTarget.value;
      let id = nanoid();
      let item = { id: id, text: text, done: false };
      this.props.addTodoCallback(item);
      this.setState({
        text: "",
      });
    }
  };

  private handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: event.currentTarget.value });
  };

  render() {
    return (
      <Input
        placeholder="Add todo"
        onKeyUp={this.handleKeyUp}
        value={this.state.text}
        onChange={this.handleOnChange}
      />
    );
  }
}
