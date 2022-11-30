import React, { Component } from "react";

export default class RenderPropsDemo extends Component {
  renderCat = (point: RenderPropsState) => {
    return <Cat {...point} />;
  };

  render() {
    return (
      <div>
        {
            /*
            在这样例子中，每次 <MouseTracker> 渲染，
            它会生成一个新的函数作为 <Mouse render> 的 prop，
            因而在同时也抵消了继承自 React.PureComponent 的 <Mouse> 组件的效果！
            <MouseTracker
                render={(state) => {
                    return <Cat {...state} />;
                }}
            />
            为了绕过这一问题，有时你可以定义一个 prop 作为实例方法，类似这样：
            */
        }
        <MouseTracker render={this.renderCat} />
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
        }}></div>
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
