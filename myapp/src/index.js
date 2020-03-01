
import './index.css';
import * as serviceWorker from './serviceWorker';

import render from "./render";
import store from "./redux_store";

store.subscribe(render);

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
