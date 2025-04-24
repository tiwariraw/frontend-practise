import React from "react";

class ChildCC extends React.Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  focusInput = () => {
    this.childRef.current.focus();
  };

  render() {
    return (
      <>
        <input type="text" ref={this.childRef} placeholder="child cc input" />
      </>
    );
  }
}

export default ChildCC;
