




// const heading = React.createElement(
//     "h1", 
//     {id: "heading", xyz: "abc"},         // This is used to give attributes to the element
//     "Hello World from React!!"
// );

// console.log(heading); // This will print an object which is called React Element

// Now we need to render this element on the DOM
// We will use ReactDOM for that
// ReactDOM is a package which helps us to interact with the DOM
// ReactDOM has a method called createRoot which takes a DOM element as an argument
// This method creates a root for our React application
// Then we can use the render method of the root to render our React element on the DOM


/**
 * 
 * 
 * <div id="parent">
 *     <div id="child">
 *         <h1>I am h1 tag</h1>
 *     </div>
 * </div>
 * 
 *  - To render the above structure using React, we can use the following code:
 * 
 * 
 */

// const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id:"child"}, React.createElement("h1", {}, "I am h1 tag")));


// console.log(parent);


/**
 * 
 * 
 * <div id="parent">
 *     <div id="child">
 *         <h1>I am h1 tag</h1>
 *        <h2>I am h2 tag</h2>
 *     </div>
 * </div>
 * 
 *  - To render the above structure using React, we can use the following code:
 *
 */

// const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]));


// console.log(parent);




/**
 * 
 * 
 * <div id="parent">
 *     <div id="child 1">
 *         <h1>I am h1 tag</h1>
 *        <h2>I am h2 tag</h2>
 *     </div>
 *     <div id="child 2">
 *         <h1>I am h1 tag</h1>
 *        <h2>I am h2 tag</h2>
 *     </div>
 * </div>
 * 
 *  - To render the above structure using React, we can use the following code:
 *
 */


const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div", { id: "child 1" }, [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]),
        React.createElement("div", { id: "child 2" }, [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")])
    ]
);

// Since this is getting too big, this is not a good way to write React code. We will learn a better way to write React code using JSX in the next episode of Namaste React

console.log(parent);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);