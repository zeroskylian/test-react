import React, { ChangeEvent, FormEvent } from "react";

interface LoginState {
  username: string;
  pwd: string;
}
export class Login extends React.Component {
  state: LoginState = { username: "", pwd: "" };

  handleState(prop: keyof LoginState) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      this.setState({
        [prop]: event.currentTarget.value,
      });
    };
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("this.state", this.state);
  };

  render(): React.ReactNode {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="username"
          placeholder="用户名"
          value={this.state.username}
          onChange={this.handleState("username")}
        />
        <br />
        <input
          type="pwd"
          placeholder="密码"
          value={this.state.pwd}
          onChange={this.handleState("pwd")}
        />
        <br />
        <input type="submit" value="提交" />
      </form>
    );
  }
}
