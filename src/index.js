import React from "react";
import ReactDom from "react-dom";

// App component is typically defined in a separate file.
const App = () => {
    return <h1>Hello, world!</h1>;
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

//This render() method in the code is different from ReactDOM.render(). 
// The render() method is a method of the Root object.
root.render(<App />);