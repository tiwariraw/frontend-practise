import { useRef, useEffect } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  // for passing ref created in parent to child and accessing a dom node in child component inside the parent component
  const parentRef1 = useRef(null);

  //
  const parentRef2 = useRef(null);

  useEffect(() => {
    // console.log(parentRef);
    parentRef1.current.style.color = "blue";
  }, []);

  const handleClick = () => {
    parentRef2.current.childFunction();
  };

  return (
    <>
      <h3>Parent</h3>
      <Child1 ref={parentRef1} />

      <Child2 ref={parentRef2} />
      <button onClick={handleClick}>Call child function</button>
    </>
  );
};

export default Parent;
