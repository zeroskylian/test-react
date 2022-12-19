import React, { Component } from 'react';
import { StaticContext, useLocation } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { MessageParams } from '../MessageParams';

export default class StateParams extends Component<
  RouteComponentProps<{}, StaticContext, MessageParams>
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

export function StateParamsHook(props: RouteComponentProps<{}, StaticContext, MessageParams>) {
  // const { id, content } = props.location.state;
  const { id, content } = useLocation<MessageParams>().state
  return (
    <div>
      <hr />
      <ul>
        <li>{id}</li>
        <li>{content}</li>
      </ul>
    </div>
  );
}