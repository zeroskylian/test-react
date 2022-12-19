import React, { Component } from 'react';
import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

export default class StateParams extends Component<
  RouteComponentProps<{}, StaticContext, { id: string; content: string }>
> {
  render() {
    const { id, content } = this.props.location.state;

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
