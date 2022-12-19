import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class SearchParams extends Component<RouteComponentProps> {
  render() {
    const searchString = this.props.location.search;
    let sp = new URLSearchParams(searchString);
    const id = sp.get('id');
    const content = sp.get('content');

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
