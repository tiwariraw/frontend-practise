# Demonstrating `forwardRef` in React

## Use Case:

React follows a one-way data flow, where data typically flows from parent to child via props. When a child component needs to communicate back to the parent to change state, the common approach is to "lift the state up" by passing down callback functions as props.

However, in certain specific scenarios, you might need more direct interaction with a child component:

## 1. Accessing DOM Node in Child from Parent

React's one-way data flow generally discourages direct manipulation of a child component's DOM nodes from the parent. However, `forwardRef` provides a way to obtain a ref to a child's DOM element when necessary, allowing for direct access and manipulation (e.g., setting styles, focusing).

## 2. Accessing and Calling Child Component Functions from Parent (Imperative Handle)

`forwardRef` in conjunction with the `useImperativeHandle` hook enables you to selectively expose specific functions or values from a child component's instance to its parent through a ref. This allows for controlled imperative interactions, such as triggering animations or calling specific methods on the child. Without `forwardRef` and `useImperativeHandle`, there is no direct way for a parent to call a function defined within a child component's functional body.

# References

- https://blog.logrocket.com/use-forwardref-react/
- https://react.dev/reference/react/forwardRef
- https://react.dev/reference/react/useImperativeHandle
- https://react.dev/learn/referencing-values-with-refs
- https://react.dev/learn/manipulating-the-dom-with-refs
