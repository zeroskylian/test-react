import React, { Component } from 'react';
import './index.css';

export default class GridTest extends Component {
  render() {
    return (
      <div className="container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
          let randomColor = Math.floor(Math.random() * 16777215).toString(16);
          if (('' + randomColor).length < 6) randomColor = randomColor + '0';
          return (
            <div
              className="item"
              key={index}
              style={{ background: `#${randomColor}` }}>
              {index}
            </div>
          );
        })}
      </div>
    );
  }
}

function GridExample() {
  
}
