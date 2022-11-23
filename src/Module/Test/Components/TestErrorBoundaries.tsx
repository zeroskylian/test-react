import React, { Component } from "react";
import { Button } from "antd";

interface TestErrorBoundariesState {
  showError: boolean;
}

export class TestErrorBoundaries extends Component {
  state: TestErrorBoundariesState = { showError: false };

  static getDerivedStateFromError(error: React.ErrorInfo) {
    return { showError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    return <div>{this.state.showError ? "Error!" : <BuggyCounter />}</div>;
  }
}

class BuggyCounter extends Component {
  state = { count: 0 };

  handleCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render(): React.ReactNode {
    if (this.state.count > 5) {
      throw new Error("I crashed!");
    }
    return (
      <div>
        Current count is {this.state.count}
        <Button onClick={this.handleCounter}> Add</Button>
      </div>
    );
  }
}
