import React from 'react';
import Main from './comp/Main';
import './App.css';
import {Provider} from "react-redux";
import HeaderContainer from "./comp/Header/HeaderContainer/HeaderContainer";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./utils/theme/theme";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Provider store={props.store}>
              <ThemeProvider theme={theme}>
                  <div className="App">
                      <HeaderContainer/>
                      <Main/>
                  </div>
              </ThemeProvider>
          </Provider>
      </BrowserRouter>
  );
};
export default App;
