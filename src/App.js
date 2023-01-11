import { Chat } from "./Chat/Chat";
import './App.css';
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, {useState} from 'react';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Components/globalStyles"
import { lightTheme, darkTheme } from "./Components/Theme"


function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
    <Router>
    <button onClick={themeToggler}>Switch Theme</button>
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
