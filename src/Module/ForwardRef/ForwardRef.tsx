import React, { Component, createRef, forwardRef } from "react";

export class ParentsRef extends Component {
  rf? = createRef<HTMLDivElement>();

  handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
    console.log("1", 1);
    console.log("this.ref", this.rf);
    if (this.rf?.current !== undefined) {
      this.rf.current!.innerHTML = "2";
    }
  };

  render() {
    return (
      <div>
        <SonFR ref={this.rf} />
        <button onClick={this.handleClick}>Change</button>
      </div>
    );
  }
}

class Son extends Component<{ r: React.ForwardedRef<HTMLDivElement> }> {
  render() {
    return <div ref={this.props.r}>ForwardRef</div>;
  }
}
interface Props {
  children?: React.ReactNode;
}

const SonFR = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <Son r={ref} {...props} />;
});
