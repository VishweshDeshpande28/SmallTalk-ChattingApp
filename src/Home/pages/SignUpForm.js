import React from "react";

function SignUpForm() {

    return (
      <div className="formCenter">
        <form className="formFields">
          <div className="formField">
      <h1 className="app-heading">Welcome To SmallTalk!</h1>
            <label className="formFieldLabel" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your name"
              name="name"
            />
          </div>
        </form>
      </div>
    );
  }

export default SignUpForm;
