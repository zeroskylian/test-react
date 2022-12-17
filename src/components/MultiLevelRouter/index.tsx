import React, { Component } from 'react';
import { Switch, NavLink, Route, Redirect } from 'react-router-dom';
import About from '../../pages/About';
import Home from '../../pages/Home';

export default class RouterTest extends Component {
  render() {
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <nav
          className="nav flex-column"
          style={{
            width: '20%',
            padding: '20pt',
            border: '1pt solid #999',
            margin: '0px -1px -1px 0px',
          }}>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink
                activeClassName="nav-link active"
                className="nav-link"
                to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="nav-link active"
                className="nav-link"
                to="/home">
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
        <div
          style={{ width: '60%', padding: '20pt', border: '1pt solid #999' }}>
          <Switch>
            <Route path={'/about'} component={About}></Route>
            <Route exact path={'/home'} component={Home}></Route>
            <Redirect to={'/about'}/>
          </Switch>
        </div>
      </div>
    );
  }
}
