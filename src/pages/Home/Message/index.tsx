import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ParamsDetail from './ParamsDetail';

export default class Message extends Component {
  render() {
    const messages = [
      { id: 1, content: '内容1' },
      { id: 2, content: '内容2' },
      { id: 3, content: '内容3' },
    ];
    return (
      <div>
        <ul>
          {messages.map((obj) => {
            return (
              <li key={obj.id}>
                <Link to={`/home/message/detail/${obj.id}/${obj.content}`}>
                  {obj.content}
                </Link>
              </li>
            );
          })}
        </ul>
        <Switch>
          <Route
            path={'/home/message/detail/:id/:content'}
            component={ParamsDetail}></Route>
        </Switch>
      </div>
    );
  }
}
