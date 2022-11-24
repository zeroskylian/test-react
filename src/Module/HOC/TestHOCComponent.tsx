import React, { Component } from "react";

export default class TestHOCComponent extends Component {
  render(): React.ReactNode {
    let C = WithLog(AComponent, { displayname: "2", props: {} });
    return <C />;
  }
}

class AComponent extends Component {
  render() {
    return <div>HOCComponent</div>;
  }
}

type WithChildren = {
  children?: React.ReactNode;
};

interface WithLogProps<T extends WithChildren> {
  props: T;
  displayname: string;
}

/**
 *
 * @param Comp 组件
 * @param props 高阶组件属性
 * P 组件属性类型
 * F 高阶组件Props 类型 WithLogProps
 * S 高阶组件state
 */
function WithLog<P extends WithChildren, F extends WithLogProps<P>>(
  Comp: React.ComponentType<P>,
  props: F
) {
  return class extends React.Component {
    componentDidMount(): void {
      console.log("componentDidMount", props.displayname);
    }

    componentWillUnmount(): void {
      console.log("componentWillUnmount", props.displayname);
    }
    render(): React.ReactNode {
      let elemProps: P = props.props;
      return <Comp {...elemProps} />;
    }
  };
}
