import React from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import { withRouter } from "react-router-dom";
import "./Home.css";
import { Player } from "@lottiefiles/react-lottie-player";


function Home(props) {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="appAside" />
            <Player
            className="player1"
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_c3gt0z38.json"
                style={{
                  height: "350px",
                  width: "350px",
                  maxWidth: "100%",
                  marginTop: "250px",
                }}
              ></Player>
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
              </NavLink>
            </div>
            <Route exact path="/" component={SignUpForm} />
            <button className="formFieldButton" onClick={() => props.history.push("/chat")}>Start Chatting</button>
          </div>
        </div>
      </Router>
    );
  }

export default withRouter(Home);
