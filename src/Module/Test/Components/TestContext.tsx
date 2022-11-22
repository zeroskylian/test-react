import React, { Component } from "react";
import { ThemeContext, ThemeContextInterface } from "../../../Const";
import { Button } from "antd";

interface TestContextState {
  value: { value: number };
  show: boolean;
}

export class TestContext extends Component {
  state: TestContextState = { value: { value: 1 }, show: false };

  handleChangeValue = () => {
    this.setState({ value: { value: 2 } });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.value}>
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
    return (
      <div>
        <input type="text" />
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
