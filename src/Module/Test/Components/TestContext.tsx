import React, { Component } from "react";
import { ThemeContext, ThemeContextInterface } from "../../../Const";
import { Button } from "antd";

export class TestContext extends Component {

  state: { value: number } = { value: 1 };

  handleChangeValue = () => {
    this.setState({ value: 2 })
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
        <TestContextGetValue />
        <TestContextGetConsumer />
        <Button onClick={this.handleChangeValue}>Change</Button>
      </ThemeContext.Provider>
      </div>
    );
  }
}

class TestContextGetValue extends Component {
  // 必写
  static contextType = ThemeContext;

  // 必写
  context!: React.ContextType<typeof ThemeContext>;

  render() {
    let date = new Date()
    return (
      <div>
        get context value is {date.toTimeString()}
      </div>
    );
  }
}

class TestContextGetConsumer extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(value: ThemeContextInterface) => {
          return <div>Consumer show {value.value}</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
