import React from 'react';
import Header from './comp/Header/Header';
import Main from './comp/Main';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
        <Header/>
        <Main state={props.state} addPost={props.addPost} append={props.append}/>
    </div>
  );
}

export default App;
