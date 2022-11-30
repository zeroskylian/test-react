import React, { Component } from "react";

export default class RenderPropsDemo extends Component {
  render() {
    return (
      <div>
        <MouseTracker
          render={(state) => {
            return <Cat {...state} />;
          }}
        />
      </div>
    );
  }
}

export class Cat extends Component<RenderPropsState> {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: this.props.x,
          top: this.props.y,
          width: "100px",
          height: "100px",
          backgroundColor: "red",
        }}>
      </div>
    );
  }
}

export interface RenderProps<T> {
  render?: (_: T) => React.ReactNode | null;
}

export interface RenderPropsState {
  x: number;
  y: number;
}

export class MouseTracker extends Component<
  RenderProps<RenderPropsState>,
  RenderPropsState
> {
  state = { x: 0, y: 0 };

  handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render(): React.ReactNode {
    let renderProps: React.ReactNode | null;
    if (this.props.render != null) {
      renderProps = this.props.render(this.state);
    }
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {renderProps}
      </div>
    );
  }
}
