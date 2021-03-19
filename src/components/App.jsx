import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signin from "./Signin";
import Register from "./Register"
import Home from "./Home"
import Notes from "./Notes"


function App() {
  

  return (
    <Router>
    <Switch>
      
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/notes">
        <Notes />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>  
  );

  
}

export default App;
