import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class ParamsDetail extends Component<
  RouteComponentProps<{ id: string; content: string }>
> {
  render() {
    const { id, content } = this.props.match.params;
    return (
      <div>
        <ul>
          <li>{id}</li>
          <li>{content}</li>
        </ul>
      </div>
    );
  }
}
