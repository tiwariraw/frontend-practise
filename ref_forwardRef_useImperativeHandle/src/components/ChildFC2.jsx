import React, { forwardRef } from "react";

const ChildFC2 = forwardRef((props, ref) => {
  return (
    <>
      <input type="text" ref={ref} placeholder="child fc2 input" />
    </>
  );
});

export default ChildFC2;
