import { Chat } from "./Chat/Chat";
import './App.css';
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react'

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
