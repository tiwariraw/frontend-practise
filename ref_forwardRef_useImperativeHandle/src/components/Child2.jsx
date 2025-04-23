import { forwardRef, useImperativeHandle } from "react";

const Child2 = (props, ref) => {
  const childFunction = () => {
    console.log("child function");
  };

  useImperativeHandle(ref, () => {
    return {
      childFunction: childFunction,
    };
  });

  return (
    <>
      <h3 ref={ref}>Child2</h3>
    </>
  );
};

export default forwardRef(Child2);
