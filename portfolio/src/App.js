import './App.css';
import React from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import ProjectHub from "./components/ProjectHub";

function App() {
  return (
    <div>
      <Router>
        <h3>Dylan Page</h3>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </nav>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <ProjectHub />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
