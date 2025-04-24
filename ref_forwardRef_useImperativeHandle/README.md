# Demonstrating `forwardRef` in React

## Use Case:

React follows a one-way data flow, where data typically flows from parent to child via props. When a child component needs to communicate back to the parent to change state, the common approach is to "lift the state up" by passing down callback functions as props.

However, in certain specific scenarios, you might need more direct interaction with a child component:

## 1. Accessing DOM Node in Child from Parent

React's one-way data flow generally discourages direct manipulation of a child component's DOM nodes from the parent. However, `forwardRef` provides a way to obtain a ref to a child's DOM element when necessary, allowing for direct access and manipulation (e.g., setting styles, focusing).

## 2. Accessing and Calling Child Component Functions from Parent (Imperative Handle)

`forwardRef` in conjunction with the `useImperativeHandle` hook enables you to selectively expose specific functions or values from a child component's instance to its parent through a ref. This allows for controlled imperative interactions, such as triggering animations or calling specific methods on the child. Without `forwardRef` and `useImperativeHandle`, there is no direct way for a parent to call a function defined within a child component's functional body.

# Understanding `ref` Behavior in Class vs Functional Components in React

## ✅ Why `ChildCC` (Class Component) Works Without `forwardRef`

In a **class component**, when you write:

```jsx
<ChildCC ref={this.parentRef} />
```

You're assigning the **instance of the class** (`ChildCC`) to the `ref`.

So in the parent component, `this.parentRef.current` gives you access to all **public methods and properties** of that class — like `focusInput()`.

This is built-in behavior for class components in React.  
That's why you **don't need to explicitly expose `focusInput`** — the parent automatically receives it via the component instance.

### 🔧 Working Example - Class Component

```jsx
// ChildCC.jsx
import React from 'react';

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
      <input type="text" ref={this.childRef} placeholder="Child CC Input" />
    );
  }
}

export default ChildCC;

// Parent.jsx
import React from 'react';
import ChildCC from './ChildCC';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
  }

  handleClick = () => {
    this.parentRef.current.focusInput();
  };

  render() {
    return (
      <>
        <ChildCC ref={this.parentRef} />
        <button onClick={this.handleClick}>Focus Input</button>
      </>
    );
  }
}

export default Parent;
```

---

## ❌ Why `ChildFC` (Functional Component) Does Not Work the Same Way

Functional components **do not have instances**. So writing:

```jsx
<ChildFC ref={this.parentRef} />
```

will **not work as expected** unless you do the following:

1. **Wrap the component with `forwardRef()`**
2. **Use `useImperativeHandle()` to manually expose methods to the parent**

Without these, React doesn’t know what to assign to the `ref`, because a functional component is just a function — there's **no class instance** for React to attach methods to.

### ⚠️ Incorrect Approach (Don't Do This)

```jsx
const ChildFC = () => {
  const childRef = React.createRef(); // ❌ Don't use createRef like this in functional component

  const focusInput = () => {
    childRef.current.focus();
  };

  return <input type="text" ref={childRef} placeholder="Child FC Input" />;
};

export default ChildFC;
```

This won't work because `createRef()` inside the functional component creates a new ref on every render, and nothing is being exposed to the parent.

---

## ✅ Correct Way to Use `ref` with Functional Component

You need to use `forwardRef` and `useImperativeHandle`:

### 🔧 Working Example - Functional Component

```jsx
// ChildFC.jsx
import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const ChildFC = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => inputRef.current.focus()
  }));

  return <input type="text" ref={inputRef} placeholder="Child FC Input" />;
});

export default ChildFC;

// Parent.jsx
import React from 'react';
import ChildFC from './ChildFC';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
  }

  handleClick = () => {
    this.parentRef.current.focusInput();
  };

  render() {
    return (
      <>
        <ChildFC ref={this.parentRef} />
        <button onClick={this.handleClick}>Focus Input</button>
      </>
    );
  }
}

export default Parent;
```

---

## 🔁 Summary

| Component Type           | Works with `ref` directly? | Needs `forwardRef` + `useImperativeHandle`? |
| ------------------------ | -------------------------- | ------------------------------------------- |
| **Class Component**      | ✅ Yes                     | ❌ No                                       |
| **Functional Component** | ❌ No                      | ✅ Yes                                      |

---

> By understanding these differences, you can effectively manage component references in both class-based and functional React components.

# References

- https://blog.logrocket.com/use-forwardref-react/
- https://react.dev/reference/react/forwardRef
- https://react.dev/reference/react/useImperativeHandle
- https://react.dev/learn/referencing-values-with-refs
- https://react.dev/learn/manipulating-the-dom-with-refs
