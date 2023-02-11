import React, { Component } from "react";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="formCenter">
        <form onSubmit={this.handleSubmit} className="formFields">
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
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
