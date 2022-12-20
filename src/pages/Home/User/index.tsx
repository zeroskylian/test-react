import React, { Component } from 'react';
import { Route, RouteComponentProps, Link } from 'react-router-dom';
import { Button } from 'antd';
import { MessageParams } from '../Message/MessageParams';
import {
  PersonParamsDetail,
  PersonSearchDetail,
  PersonStateDetail,
} from './PersonDetail';
export default class User extends Component<RouteComponentProps> {
  render() {
    const params: MessageParams = { id: '1', content: 'params' };
    const search: MessageParams = { id: '2', content: 'search' };
    const state: MessageParams = { id: '3', content: 'state' };
    return (
      <div>
        <Button
          onClick={() => {
            this.props.history.push(
              `/home/user/personparams/${params.id}/${params.content + '-push'}`
            );
          }}>
          Params-Push
        </Button>
        <Button
          onClick={() => {
            this.props.history.replace(
              `/home/user/personparams/${params.id}/${
                params.content + '-replace'
              }`
            );
          }}>
          Params-Replace
        </Button>
        <br />
        <Button
          onClick={() => {
            this.props.history.push(
              `/home/user/personsearch?id=${search.id}&content=${
                search.content + '-push'
              }`
            );
          }}>
          Search-Push
        </Button>
        <Button
          onClick={() => {
            this.props.history.replace(
              `/home/user/personsearch?id=${search.id}&content=${
                search.content + '-push'
              }`
            );
          }}>
          Search-Replace
        </Button>
        <br />
        <Button
          onClick={() => {
            this.props.history.push(`/home/user/personstate`, state);
          }}>
          State-Push
        </Button>
        <Button
          onClick={() => {
            this.props.history.replace(`/home/user/personstate`, state);
          }}>
          State-Replace
        </Button>
        <hr />
        <Route
          path={'/home/user/personparams/:id/:content'}
          component={PersonParamsDetail}></Route>
        <Route
          path={'/home/user/personsearch'}
          component={PersonSearchDetail}></Route>
        <Route
          path={'/home/user/personstate'}
          component={PersonStateDetail}></Route>
        
      </div>
    );
  }
}
