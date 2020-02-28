import React from 'react';
import Header from './comp/Header/Header';
import Main from './comp/Main';
import './App.css';
import Context from "./comp/Context/Context";

const App = (props) => {
    let state = props.store.getState();
  return (
      <Context.Provider value={props.store}>
          <div className="App">
              <Header/>
              <Main state={state}/>
          </div>
      </Context.Provider>
  );
};
export default App;
