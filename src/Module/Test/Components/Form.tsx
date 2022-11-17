import React from "react";

export class TestList extends React.Component<
  { list: string[] },
  { list: string[]; value: string }
> {
  constructor(props: { list: string[] }) {
    super(props);
    this.state = { list: props.list, value: "" };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let list = this.state.list;
    list.push(this.state.value);

    this.setState({
      list: list,
      value: "",
    });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    this.setState({
      value: event.currentTarget.value,
    });
  };
  render(): React.ReactNode {
    const list = this.props.list;
    const listItems = list.map((value: string) => <li key={value}>{value}</li>);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            添加
            <input
              type="text"
              name="add"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="输入"
            />
          </label>
          <input type="submit" name="add" value="添加" />
        </form>
        <ul>{listItems}</ul>
      </div>
    );
  }
}
