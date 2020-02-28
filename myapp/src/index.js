
import './index.css';
import * as serviceWorker from './serviceWorker';

import store from "./redux_store";
import render from "./render";

render();

store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
