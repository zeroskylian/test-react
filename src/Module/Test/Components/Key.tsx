import { ThemeContext } from "../../../Const";
import React from "react";
import { Button } from "antd";
import "antd/dist/reset.css";

interface SonData {
  id: number;
  name: string;
  age: number;
}

class Son extends React.Component<SonData> {
  componentDidUpdate(
    prevProps: Readonly<SonData>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log(`Car--componentDidUpdate===${prevProps}===${prevState}`);
  }

  static contextType = ThemeContext;

  context!: React.ContextType<typeof ThemeContext>;

  render(): React.ReactNode {
    return (
      <li>
        姓名：{this.props.name}，年龄：{this.props.age}
        <input type="text" name="" id="" />
      </li>
    );
  }
}

export class Person extends React.Component {
  state: { sons: SonData[] } = {
    sons: [
      { id: 1, name: "小明", age: 12 },
      { id: 2, name: "小红", age: 11 },
    ],
  };

  componentDidUpdate(
    prevProps: Readonly<{ name: string }>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log(`Person--componentDidUpdate===${prevProps}===${prevState}`);
  }

  handleSwitchCar = () => {
    let newSon = { id: this.state.sons.length + 1, name: "小王", age: 12 };
    let sons = [newSon, ...this.state.sons];
    this.setState({
      sons,
    });
  };

  static contextType = ThemeContext;

  context!: React.ContextType<typeof ThemeContext>;

  render(): React.ReactNode {
    return (
      <div style={{ marginTop: "20px", marginLeft: "20px" }}>
        <ul>
          {this.state.sons.map((item, index) => {
            //  key 用index 在 输入框有文字的情况会造成数据错误
            return <Son key={item.id} {...item} />;
          })}
        </ul>
        <Button onClick={this.handleSwitchCar}>生孩子</Button>
      </div>
    );
  }
}
