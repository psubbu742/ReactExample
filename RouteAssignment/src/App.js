import React, { Component } from 'react';

//import Courses from './containers/Courses/Courses';
//import Users from './containers/Users/Users';
import {BrowserRouter} from 'react-router-dom';
import MainContainer from './containers/MainContainer/MainContainer'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className="App">
        <MainContainer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
