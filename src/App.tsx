import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

export default class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <nav
          style={{
            width: '20%',
            padding: '20pt',
            border: '1pt solid #999',
            margin: '0px -1px -1px 0px',
          }}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
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
