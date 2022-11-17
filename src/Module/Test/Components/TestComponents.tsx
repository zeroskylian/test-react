import React from "react";
import PropTypes from "prop-types";
export interface Data {
  name: string;
  age: number;
}
export class TextCom extends React.Component<Data> {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
  };
  static defaultProps = {
    age: 5,
  };

  render() {
    return (
      <div>
        {this.props.name}==={this.props.age}
      </div>
    );
  }
}
export interface ContainerChildren {
  children?: React.ReactNode | React.ReactNode[];
}
export class Component1 extends React.Component {
  state = { count: 1 };

  btnClick = () => {
    this.setState({ count: this.state.count + 2 });
    // 只会执行最后一次
    this.setState({ count: this.state.count + 1 });
  };

  render(): React.ReactNode {
    return (
      <div>
        <button onClick={this.btnClick} style={{ display: "block" }}>
          Click
        </button>
        {this.state.count}
      </div>
    );
  }
}