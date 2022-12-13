import React, { Component } from 'react';
// import History from 'history';
import { Button } from 'antd';
const History = require('history');

export class BrowserHistoryTest extends Component {
  history = History.createBrowserHistory();

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <a
          href="https://www.baidu.com"
          onClick={(event) => {
            event.preventDefault();
          }}>
          链接
        </a>
        <Button
          onClick={() => {
            this.history.push('/about');
          }}
          title={'push'}>
          Push1
        </Button>
        <Button
          onClick={() => {
            this.history.push('/about1');
          }}
          title={'push'}>
          Push2
        </Button>
        <Button
          onClick={() => {
            this.history.replace('/replace1');
          }}
          title={'push'}>
          Replace
        </Button>

        <Button
          onClick={() => {
            this.history.back();
          }}
          title={'push'}>
          Back
        </Button>

        <Button
          onClick={() => {
            this.history.forward();
          }}
          title={'push'}>
          Forward
        </Button>
      </div>
    );
  }
}

export class HashHistoryTest extends Component {
    history = History.createHashHistory();
  
    render() {
      return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <a
            href="https://www.baidu.com"
            onClick={(event) => {
              event.preventDefault();
            }}>
            链接
          </a>
          <Button
            onClick={() => {
              this.history.push('/about');
            }}
            title={'push'}>
            Push1
          </Button>
          <Button
            onClick={() => {
              this.history.push('/about1');
            }}
            title={'push'}>
            Push2
          </Button>
          <Button
            onClick={() => {
              this.history.replace('/replace1');
            }}
            title={'push'}>
            Replace
          </Button>
  
          <Button
            onClick={() => {
              this.history.back();
            }}
            title={'push'}>
            Back
          </Button>
  
          <Button
            onClick={() => {
              this.history.forward();
            }}
            title={'push'}>
            Forward
          </Button>
        </div>
      );
    }
  }