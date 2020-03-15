import React from 'react';
import Main from './comp/Main';
import './App.css';
import {Provider} from "react-redux";
import HeaderContainer from "./comp/Header/HeaderContainer/HeaderContainer";

const App = (props) => {
  return (
      <Provider store={props.store}>
          <div className="App">
              <HeaderContainer/>
              <Main/>
          </div>
      </Provider>
  );
};
export default App;
