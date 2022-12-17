import React, { Component } from 'react';
import Message from './Message';
import User from './User';
import { Switch, NavLink, Route, Redirect } from 'react-router-dom';
export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              activeClassName="nav-link active"
              className="nav-link"
              to="/home/message">
              Message
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="nav-link active"
              className="nav-link"
              to="/home/user">
              User
            </NavLink>
          </li>
        </ul>
        <div>
          <Switch>
            <Route path={'/home/message'} component={Message} />
            <Route path={'/home/user'} component={User} />
            <Redirect to={'/home/message'} />
          </Switch>
        </div>
      </div>
    );
  }
}
