import React from "react";
import ReactDOM from "react-dom/client";

let element = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "This is h1 inside innerDiv"),
  React.createElement("h2", {}, "This is h2 inside innerDiv"),
  React.createElement("h3", {}, "This is h3 inside innerDiv"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

let heading = (
  <div className="title">
    <h1>I am heading1 form JSX</h1>
    <h2>I am heading2 from JSX</h2>
    <h3>I am heading3 from JSX</h3>
  </div>
);

root.render(heading);

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

  let heading2= (
<div className="title">
    <h1 style={{color:"blue"}} key="a">I am heading1 form JSX</h1>
    <h2 style={{color:"pink"}} key="b" >I am heading2 from JSX</h2>
    <h3 style={{color:"black"}} key="c">I am heading3 from JSX</h3>
</div>
  ) 

  root.render(heading2)


// functional component
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