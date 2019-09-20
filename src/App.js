import React from 'react';
import Home from "./home/home";
import {GlobalStyle} from "./index_style";
import store from "./store/store";
import {Provider} from "react-redux";
import {Route} from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Home></Home>
     
    </Provider>
  );
}

export default App;
