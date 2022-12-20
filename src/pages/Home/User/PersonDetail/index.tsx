import React, { Component } from 'react';
import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { MessageParams } from '../../Message/MessageParams';
export class PersonParamsDetail extends Component<
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

export class PersonSearchDetail extends Component<RouteComponentProps> {
  render() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const id = params.get('id');
    const content = params.get('content');
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

export class PersonStateDetail extends Component<
  RouteComponentProps<MessageParams, StaticContext, MessageParams>
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
