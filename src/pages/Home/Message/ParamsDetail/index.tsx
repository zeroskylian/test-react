import React, { Component } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { MessageParams } from '../MessageParams';

export default class ParamsDetail extends Component<
  RouteComponentProps<MessageParams>
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

export function ParamsDetailHook(props: RouteComponentProps<MessageParams>) {
  const { id, content } = useParams<MessageParams>();
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
