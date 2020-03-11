import React from 'react';
import Header from './comp/Header/Header';
import Main from './comp/Main';
import './App.css';
import {Provider} from "react-redux";

const App = (props) => {
  return (
      <Provider store={props.store}>
          <div className="App">
              <Header/>
              <Main/>
          </div>
      </Provider>
  );
};
export default App;
