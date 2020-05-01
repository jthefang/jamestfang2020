import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Summaries from './components/Summaries';

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/summaries" exact component={Summaries} />
      </div>
    </Router>
  );
}

export default App;