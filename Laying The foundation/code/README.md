## Coding Assignment:
- Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
  
  Ans.)

``` JavaScript
console.log("Hello js")
let element= React.createElement(
    "div",
    {id:"divinner"},
    [
        React.createElement(
            "h1",
            {},
            "This is h1 inside innerDiv"
        ),React.createElement(
            "h2",
            {},
            "This is h2 inside innerDiv"
        ),
        React.createElement(
            "h3",
            {},
            "This is h3 inside innerDiv"
        )

    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element)

```
 - Create the `same element using JSX`
  > JSX syntax is below:

  Ans.)

```JavaScript

  let heading= (
<div className="title">
    <h1>I am heading1 form JSX</h1>
    <h2>I am heading2 from JSX</h2>
    <h3>I am heading3 from JSX</h3>
</div>
  ) 
```


  - Create a `functional component of the same with JSX`
 > It is advised to name the functional component as Capital and while rendering functional component use <Name />

 Ans.)
   ```Javascript
   let Heading1 = () => {
  return (
    <div className="title" key="title">
      <h1>I am heading1 form functional component</h1>
      <h2>I am heading2 from functional component</h2>
      <h3>I am heading3 from functional component</h3>
    </div>
  );
};

root.render(<Heading1 />);

   ```
  
  - `Pass attribute` into the tag in `JSX`
```JavaScript

  let heading= (
<div className="title">
    <h1 style={{color:blue}} key="a">I am heading1 form JSX</h1>
    <h2 style={{color:pink}} key="b" >I am heading2 from JSX</h2>
    <h3 style={{color:black}} key="c">I am heading3 from JSX</h3>
</div>
  ) 
```
   - `Composition of Component` (Add a component inside another)
  > Adding a component inside another component using <Name/ > 

  ```javaScript
  let NewComponent= ()=>{
    return <h4>Hello h4</h4>
  }

  let Heading3 = () => {
    return (
      <div className="title" key="title">
        <h1>I am heading1 form functional component</h1>
        <h2>I am heading2 from functional component</h2>
        <h3>I am heading3 from functional component</h3>
        <NewComponent/>
      </div>
    );
  };

  root.render(<Heading3/>);

  ```
  - `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

- Create a `Header Component` from scratch using `Functional Component` with JSX
    - Add a `Logo on Left`
    - Add a `search bar in middle`
    - Add `User icon on right`
    - Add `CSS to make it look nice`

