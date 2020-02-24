import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, append} from "./state";

let render = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} append={append}/>, document.getElementById('root'));
};

export default render;