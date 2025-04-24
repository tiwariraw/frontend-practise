import React, { useRef, forwardRef, useImperativeHandle } from "react";

const ChildFC1 = forwardRef((props, ref) => {
  const childRef = useRef(null);

  const focusInput = () => {
    childRef.current.focus();
  };

  useImperativeHandle(ref, () => ({
    focusInput: focusInput,
  }));

  return (
    <>
      <input type="text" ref={childRef} placeholder="child fc1 input" />
    </>
  );
});

export default ChildFC1;
