import React from "react";
import ChildCC from "./ChildCC";
import ChildFC1 from "./ChildFC1";
import ChildFC2 from "./ChildFC2";

class ParentCC extends React.Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
  }

  handleClick1 = () => {
    this.parentRef.current.focusInput();
  };

  handleClick2 = () => {
    // If this.parentRef is passed to a class component, then it will point to an instance of the ChildCC.
    // But if this.parentRef is passed to a function component (using forwardRef), then it will point to the native input element and not the ChildFC component instance.
    this.parentRef.current.focus();
  };

  render() {
    return (
      <>
        {/* <ChildCC ref={this.parentRef} /> */}
        {/* <ChildFC1 ref={this.parentRef} /> */}
        <ChildFC2 ref={this.parentRef} />
        <button onClick={this.handleClick1}>Focus input 1</button>
        <button onClick={this.handleClick2}>Focus input 2</button>
      </>
    );
  }
}

export default ParentCC;
