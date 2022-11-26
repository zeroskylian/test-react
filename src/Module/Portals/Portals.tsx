import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Portals.css";

const modalRootEl = document.getElementById("modal-root");

export default class Portals extends Component<{ children?: React.ReactNode }> {
  el = document.createElement("div");

  componentDidMount() {
    modalRootEl?.appendChild(this.el);
  }

  componentWillUnmount(): void {
    modalRootEl?.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.el
    );
  }
}

export class PortalsApp extends React.Component<{}> {
  state = { showModal: false };

  constructor(props: {}) {
    super(props);
    this.state = { showModal: false };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  render() {
    // Show a Modal on click.
    // (In a real app, don't forget to use ARIA attributes
    // for accessibility!)
    const modal = this.state.showModal ? (
      <Portals>
        <div className="modal">
          <div>
            With a portal, we can render content into a different part of the
            DOM, as if it were any other React child.
          </div>
          This is being rendered inside the #modal-container div.
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Portals>
    ) : null;
    console.log("first");
    return (
      <div className="app">
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}
