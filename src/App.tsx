import React, { Component } from 'react';
import './App.css';
// import RouterTest from './components/MultiLevelRouter';
import { NewTab } from './components/NewTab';

export default class App extends Component {
  render() {
    return (
      <NewTab />
      // <RouterTest />
      // <GridTest />
    );
  }
}
