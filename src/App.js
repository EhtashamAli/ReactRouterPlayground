import React, { Component } from 'react';
import {Route  , Switch , BrowserRouter  } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Error from './Components/Error';
import Nav from './Components/Navigation/Nav';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Nav/>
        <Switch>
          <Route path = "/" component = {Home} exact/>
          <Route path = "/about" component = {About} />
          <Route path = "/contact" component = {Contact} />
          <Route component = {Error} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
