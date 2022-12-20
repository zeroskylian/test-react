import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button } from 'antd';

class RouterTestHeader extends Component<RouteComponentProps> {
  render() {
    return (
      <header>
        <h1>Title</h1>
        <Button
          onClick={() => {
            this.props.history.goBack();
          }}>
          Back
        </Button>
        <Button
          onClick={() => {
            this.props.history.goForward();
          }}>
          Forward
        </Button>
      </header>
    );
  }
}
export default withRouter(RouterTestHeader);
