import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AppNavbar from './components/AppNavbar';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Summaries from './components/summaries/Summaries';
import Notes from './components/notes/Notes';
import Resume from './components/resume/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/summaries" exact component={Summaries} />
        <Route path="/notes" exact component={Notes} />
        <Route path="/resume" exact component={Resume} />
      </div>
    </Router>
  );
}

export default App;
