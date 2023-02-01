import { Chat } from "./Chat/Chat";
import './App.css';
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, {useState} from 'react'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Theme";
import { Button  } from "@material-ui/core";
import MenuAppBar from "./Navbar/Navbar";
import CharApp from "./CharApp";

function App() {

  const [theme, setTheme] = useState('light');  
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

  return (
    <>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <Button onClick={themeToggler}>Switch to Dark Mode</Button>
    <Router>
    <MenuAppBar/>
  
      <Switch>
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/" component={Home} />
        <Route exact path="/CharApp" component={CharApp} />
      </Switch>
    </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
