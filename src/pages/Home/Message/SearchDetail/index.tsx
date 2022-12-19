import React, { Component } from 'react';
import { RouteComponentProps, useLocation } from 'react-router-dom';

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

export function SearchParamsHook(props: RouteComponentProps) {
  // 用props 能得到一样的效果么?
  const { search } = useLocation();
  // const search = props.location.search
  let sp = new URLSearchParams(search);
  const id = sp.get('id');
  const content = sp.get('content');

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
