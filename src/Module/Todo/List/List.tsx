import React, { Component } from "react";
import { List, Checkbox, Button } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { TodoItem } from "../Todo";

interface TodoListProps {
  list: TodoItem[];
  updateDoneCallback: (id: string, done: boolean) => void;
  deleteItemCallBack: (id: string) => void;
}

export class TodoList extends Component<TodoListProps> {
  render() {
    return (
      <List size="small">
        {this.props.list.map((todo) => {
          return (
            <ListItem
              key={todo.id}
              item={todo}
              updateDoneCallback={this.props.updateDoneCallback}
              deleteItemCallBack={this.props.deleteItemCallBack}
            />
          );
        })}
      </List>
    );
  }
}

class ListItem extends Component<{
  item: TodoItem;
  updateDoneCallback: (id: string, done: boolean) => void;
  deleteItemCallBack: (id: string) => void;
}> {
  state = { mouseIn: false };

  private handleCheckChange = (event: CheckboxChangeEvent) => {
    let value = event.target.checked;
    this.props.updateDoneCallback(this.props.item.id, value);
  };

  private handleMouseInOut = (value: boolean) => {
    return (event: React.MouseEvent<HTMLDivElement>) => {
      this.setState({ mouseIn: value });
    };
  };

  private handleDelete = () => {
    if (window.confirm("确认")) {
      this.props.deleteItemCallBack(this.props.item.id);
    }
  };

  render(): React.ReactNode {
    let { text, done } = this.props.item;
    let { mouseIn } = this.state;
    let color = mouseIn ? "#ddd" : "#FFF";
    return (
      <List.Item
        onMouseEnter={this.handleMouseInOut(true)}
        onMouseLeave={this.handleMouseInOut(false)}
        style={{
          backgroundColor: color,
          display: "flex",
          justifyContent: "space-between",
        }}>
        <div>
          <Checkbox checked={done} onChange={this.handleCheckChange} />{" "}
          <span style={{ marginLeft: "10px" }}>{text}</span>
        </div>
        {mouseIn ? (
          <Button danger onClick={this.handleDelete}>
            删除
          </Button>
        ) : null}
      </List.Item>
    );
  }
}
