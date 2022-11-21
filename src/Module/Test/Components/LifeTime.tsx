import React from "react";
import { root } from "../../../index";
import { ThemeContext } from "../../../Const";

class Car extends React.Component<{ name: string }> {
  componentDidMount(): void {
    console.log("Car--componentDidMount");
  }

  componentDidUpdate(
    prevProps: Readonly<{ name: string }>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log(`Car--componentDidUpdate===${prevProps}===${prevState}`);
  }

  componentWillUnmount(): void {
    console.log("Car--componentWillUnmount");
  }

  static contextType = ThemeContext;

  context!: React.ContextType<typeof ThemeContext>;

  render(): React.ReactNode {
    console.log("Car--render");
    return (
      <ThemeContext.Consumer>
        {(theme) => {
          return (<div>
            注意看，这个人拥有一辆{this.props.name}==={this.context.value}
          </div>)
        }}
      </ThemeContext.Consumer>
    );
  }
}

export class Person extends React.Component {
  state = { name: "奥迪" };

  ref = React.createRef<Car>();

  componentDidMount(): void {
    console.log("Person--componentDidMount");
  }

  componentDidUpdate(
    prevProps: Readonly<{ name: string }>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log(`Person--componentDidUpdate===${prevProps}===${prevState}`);
  }

  componentWillUnmount(): void {
    console.log("Person--componentWillUnmount");
  }

  handleSwitchCar = () => {
    this.context.value = 2;
    this.setState({ name: "奔驰" });
  };

  handleCarScrapped = () => {
    root.unmount();
  };

  static contextType = ThemeContext;

  context!: React.ContextType<typeof ThemeContext>;

  render(): React.ReactNode {
    console.log("Person--render");
    return (
      <div>
        <Car ref={this.ref} name={this.state.name} />
        <button onClick={this.handleSwitchCar}>换车</button>
      </div>
    );
  }
}
