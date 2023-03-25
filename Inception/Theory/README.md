## Namasthe React By Akshay Saini

# Inception
## Q1.) What is Emmet?
 Ans.)  `Emmet` is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of HTML and CSS.
## Q2.) Difference between library and framework?
 Ans.) A `library` is a collection of packages that perform specific operations whereas a `framework`contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework. The framework provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a library is used, the application calls the code from the library.
 ## Q3.) What is CDN? Why do we use it?
 Ans.) A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content. The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.
 ## Q4.)Why is `React` known as React?
 Ans.) React is a `JavaScript library` for building user interfaces, and it was developed by Facebook. 
 `React` is named React because of its ability to react to changes in data.The name "React" comes from the way it handles changes to a user interface, by efficiently re-rendering only the parts of the UI that have actually changed, instead of re-rendering the entire UI(`React reacts to changes in the UI and updates only what is necessary`)

 ## Q5.)What is crossorigin in script tag?
 Ans.)  The `crossorigin attribute` sets the mode of the request to an HTTP CORS Request. The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

## Q6.) What is difference between React and ReactDOM?
Ans.) 
### React :- 
- A JavaScript library for building User Interfaces.
- Defines the components and their behaviour
- The react package contains `React.createElement(), React.Component, React.Children`
- React is used to write the code that creates the user interface
### ReactDOM :-
- A package that helps React manipulate the browser DOM
- ReactDOM renders React components into the browser DOM
- The react-dom package contains `ReactDOM.render()`
  
## Q7.)  What is difference between react.development.js and react.production.js files via CDN?
Ans.) Development is the stage of an application before it's made public while production is the term used for the same application when it's made public. Development build is several times (maybe 3-5x) slower than the production build.
## Q8.) What is async and defer?
Ans.)` async:` When the browser encounters a script with the async attribute, it will continue to load and render the page, while downloading the script file asynchronously in the background. Once the file is downloaded, it will be executed immediately, even if the rest of the page is not finished loading.
```javaScript
<script src="demo_async.js" async></script>
```
`defer:` When the browser encounters a script with the defer attribute, it will continue to load and render the page, while downloading the script file asynchronously in the background. However, the script file will not be executed until the entire page has finished loading. 
```javaScript
<script src="demo_defer.js" defer></script>
```