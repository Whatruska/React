import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux_store";

let render = (state = store.getState()) => {
    ReactDOM.render(<App state={state}/>, document.getElementById('root'));
};

export default render;