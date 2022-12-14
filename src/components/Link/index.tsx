import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
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
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </nav>
        <div
          style={{ width: '60%', padding: '20pt', border: '1pt solid #999' }}>
          <Route path={'/about'} component={About}></Route>
          <Route path={'/home'} component={Home}></Route>
        </div>
      </div>
    );
  }
}
