import { forwardRef } from "react";

const Child1 = (props, ref) => {
  console.log(props); // {}
  console.log(ref); // {current: null}

  return (
    <>
      <h3 ref={ref}>Child1</h3>
    </>
  );
};

export default forwardRef(Child1);
