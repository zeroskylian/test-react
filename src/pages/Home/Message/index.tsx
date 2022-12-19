import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ParamsDetail from './ParamsDetail';
import SearchParams from './SearchDetail';
import StateParams from './StateDetail/StateParams';

export default class Message extends Component {
  render() {
    const obj1 = { id: 1, content: '内容1' };
    const obj2 = { id: 2, content: '内容2' };
    const obj3 = { id: 3, content: '内容3' };
    return (
      <div>
        <ul>
          <li key={obj1.id}>
            <Link to={`/home/message/paramsdetail/${obj1.id}/${obj1.content}`}>
              Params-{obj1.content}
            </Link>
          </li>
          <li key={obj2.id}>
            <Link
              to={`/home/message/searchdetail?id=${obj2.id}&content=${obj2.content}`}>
              Search-{obj1.content}
            </Link>
          </li>
          <li key={obj3.id}>
            <Link
              to={{
                pathname: '/home/message/statedetail',
                state: { ...obj3 },
              }}>
              State-{obj3.content}
            </Link>
          </li>
        </ul>
        <Switch>
          <Route
            path={'/home/message/paramsdetail/:id/:content'}
            component={ParamsDetail}
          />
          <Route
            path={'/home/message/searchdetail/'}
            component={SearchParams}
          />
          <Route path={'/home/message/statedetail'} component={StateParams} />
        </Switch>
      </div>
    );
  }
}
