import React from "react";
import store from "../../redux_store";
let Context = React.createContext(store);
export default Context;