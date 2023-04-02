
<h1 align="center">Namasthe React🚀</h1>
<h2 align="center">Let's get Hooked!</h2>


---
## Q.) What is the difference between Named Export, Default Export and *as export?

- **Named Export**
    - Named export allows you to export multiple named values from a module. Each named value has its own identifier, and when you import the module, you can selectively import only the values you need.
    - **We should use `{ }` for named import**
    - ```javascript
        //module.js
        export const Value={//expression}
        export const xyz = 4;

        //app.js
        import {Value,xyz} from "./module.js"
         ```
- **Default Export**
  - A default export allows you to export a single value from a module as the default value. When you import the module, you can import the default value using any identifier you choose.
  - ```javascript
    // module.js
     const Greet=()=>{
        console.log("Hello")
     } 
     export default Greet;

    // app.js
    import Greet from './module.js';
    Greet(); // 'Hello'
- ***as Export**
    - The `* as` syntax allows you to import all named exports from a module and access them through a single object.
    - ```javascript
        // module.js
        export const foo = 'foo';
        export const bar = 'bar';

        // app.js
        import * as myModule from './module.js';
        console.log(myModule.foo); // 'foo'
       console.log(myModule.bar); // 'bar'    
      ```

## Q.) What is the importance of config.js file?

`config.js` files are essentially editable text files that contain information required for the successful operation of a program. The files are structured in a particular way, formatted to be user configurable. Most of the computer programs we use: whether office suites, web browsers, even video games are configured via menu interfaces. Configuration files are very simple in structure. For instance, if you were to write an application, and the only thing it ever needed to know was its user's preferred name, then its one and only config file could contain exactly one word: the name of the user. For example:
 
  ```
  Durga Prasad
  ```
 
Usually, though, an application needs to keep track of more than just one piece of information, so configuration often uses a key and a value:

```
Name='Durga Prasad'
```
## Q.) What are React Hooks?

 In React version 16.8, React introduced a new pattern called Hooks. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

## React provides a bunch of standard in-built hooks:
- useState: To manage states. Returns a stateful value and an updater function to update it.
- useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
- useContext: To return the current value for a context.
- useReducer: A useState alternative to help with complex state management.
- useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
- useMemo: It returns a memoized value that helps in performance optimizations.
- useRef: It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.
- useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- useDebugValue: Helps to display a label in React DevTools for custom hooks.



## Q.) Why do we need useState Hook?
 
`useState hook is used to maintain the state in our React application`. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls useState hook is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component. `The useState hook is a special function that takes the initial state as an argument and returns an array of two entries`. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.
- Behaves as a normal variable
- **Note**: When ever there is change in state variable react rerenders the component.
### Importing useState
  We import useState using named import i.e, using `{}`
```js
import {useState} from "react"
```

### Syntax : 
```js
const [state,setState]=useState(initialState);
```

We can also use like this: **Nothing but array Destructuring**
```js
const arr= useState(initialState);
const[state,setState]=arr;
```