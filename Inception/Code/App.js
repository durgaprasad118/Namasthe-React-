// Manipulating HTML DOM using  JS.
let child = document.createElement("h1");
child.innerHTML = "Hello World from JS";
let heading = document.getElementById("jsHead");
heading.appendChild(child);

// Manipulating DOM using React
const element = React.createElement(
  "h1",
  { id: "heading1" },
  "Hello World form React"
);
// creating root using ReactDOM (from CDN)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

// Creating a nested React Elements

const elements = React.createElement("div", { class: "innerDIv" }, [
  React.createElement(
    "p",
    { id: "para" },
    "I am a paragraph form nested React elements"
  ),
  React.createElement(
    "h3",
    { id: "h3" },
    "I am a heading3 form nested React elements"
  ),
]);

root.render(elements);
