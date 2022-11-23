import React, { Component } from "react";
import { TodoHeader } from "./Header/Header";
import { TodoFooter } from "./Footer/Footer";
import { TodoList } from "./List/List";

export interface TodoItem {
  id: string;
  text: string;
  done: boolean;
}

export class Todo extends Component {
  state: { list: TodoItem[] } = {
    list: [{ id: "1", text: "react", done: false }],
  };

  private addTodo = (item: TodoItem) => {
    let list = [item, ...this.state.list];
    this.setState({ list });
  };

  private updateTodoDone = (id: string, done: boolean) => {
    let list = this.state.list;
    let item = list.find((item) => {
      return item.id === id;
    });
    if (item !== undefined) {
      item.done = done;
    }
    this.setState({ list });
  };

  private deleteTodoItem = (id: string) => {
    let list = this.state.list;
    let filter = list.filter((item) => {
      return item.id !== id;
    });
    this.setState({ list: filter });
  };

  private selectAll = (allDone: boolean) => {
    let list = this.state.list;
    list.forEach((todo) => {
      todo.done = allDone;
    });
    this.setState({ list: list });
  };

  private deleteAllDoneItem = () => {
    let list = this.state.list;
    let filter = list.filter((item) => {
      return !item.done;
    });
    this.setState({ list: filter });
  };

  render() {
    return (
      <div
        style={{
          border: "1px solid #A1A1A1",
          borderRadius: "10px",
          padding: "10px",
          width: "50%",
        }}>
        <TodoHeader addTodoCallback={this.addTodo}></TodoHeader>
        <TodoList
          list={this.state.list}
          updateDoneCallback={this.updateTodoDone}
          deleteItemCallBack={this.deleteTodoItem}
        />
        <TodoFooter
          list={this.state.list}
          selectAllCallback={this.selectAll}
          deleteAlldoneCallback={this.deleteAllDoneItem}
        />
      </div>
    );
  }
}
