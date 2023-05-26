import React, { useState, useRef } from "react";
import { render } from "react-dom";
import "./SignUpForm.css";
import { useHistory } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

function SignUpForm(e) {
  const [Name, setName] = useState("");
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();
  const history = useHistory();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSave = () => {
    const formValid = simpleValidator.current.allValid();
    console.log("saving...");
    if (formValid) {
      history.push("/chat")
    }
      else {
        console.log("form not valid...");
      simpleValidator.current.showMessages();
      forceUpdate(1);
      }
    }

  return (
    <Router basename="/react-auth-ui/">
    <div>
      <div className="disName">Welcome to SmallTalk {Name}</div>
      <input
        className="inputText"
        name="Name"
        type="input"
        value={Name}
        onChange={handleChange}
        placeholder="Enter Your Goodname"
      />
      {simpleValidator.current.message("Name", Name, "required")}

      <button
        className="SubmitBtn"
        onClick={handleSave}
      >
        Let's Start!
      </button>
    </div>
    </Router>
  );
}

render(<SignUpForm />, document.getElementById("root"));

export default SignUpForm;
