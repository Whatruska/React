import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import s from "./redux_store";

let render = (store = s) => {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
};

export default render;