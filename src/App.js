import { Chat } from "./Chat/Chat";
import './App.css';
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, {useState} from 'react';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Theme";
import DrawerAppBar from "./Navbar/Navbar";
import CharApp from "./CharApp";

function App() {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}


  return (
    <Router>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
    <DrawerAppBar/>
      <DrawerAppBar themeToggler={themeToggler}/>
  
      <Switch>
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/" component={Home} />
      </Switch>
    </ThemeProvider>
    <Route exact path="/CharApp" component={CharApp} />
    </Router>
  );
}

export default App;
