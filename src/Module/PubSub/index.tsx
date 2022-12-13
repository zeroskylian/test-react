import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import { Button, Input } from 'antd';
import axios from 'axios';

export default class PubsubTest extends Component {
  render() {
    return (
      <div>
        <Search />
        <Content />
      </div>
    );
  }
}

class Search extends Component {
  state: { keywords?: string } = {};

  sendRequest = () => {
    axios
      .get(`https://httpbin.org/get?i=${this.state.keywords ?? ''}`)
      .then((response) => {
        PubSub.publish('data', response.data.args.i);
      });
  };

  render(): React.ReactNode {
    return (
      <div style={{ display: 'flex' }}>
        <Input
          placeholder="输入"
          value={this.state.keywords}
          onChange={(event) => {
            this.setState({ keywords: event.currentTarget.value });
          }}></Input>
        <Button onClick={this.sendRequest}>发送</Button>
      </div>
    );
  }
}

class Content extends Component {
  state: { data?: string } = {};
  token?: string;

  componentDidMount(): void {
    this.token = PubSub.subscribe('data', this.updateData);
  }

  componentWillUnmount(): void {
    if (this.token) {
      PubSub.unsubscribe(this.token);
    }
  }

  updateData = (message: string, data?: string) => {
    this.setState({ data: data });
  };

  render(): React.ReactNode {
    return <div>{this.state.data}</div>;
  }
}
