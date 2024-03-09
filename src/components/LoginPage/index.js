import { Component } from "react";
import Cookies from "cookies-js";

import "./index.css";

class LoginPage extends Component {
  state = { userName: "", email: "", number: "", errorMsg: false };

  onChangeName = (event) => {
    this.setState({ userName: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangeNumber = (event) => {
    this.setState({ number: event.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { userName, email, number } = this.state;
    if (userName === "" || email === "" || number === "") {
      this.setState({ errorMsg: true });
    } else {
      const jwtToken = "your_jwt_token_here"; // Define your JWT token
      Cookies.set("jwt_token", jwtToken, {
        expires: 30,
        path: "/",
      });
      this.props.history.replace("/");
    }
  };

  render() {
    const { userName, email, number, errorMsg } = this.state;
    return (
      <div className="login-container">
        <div className="card-container">
          <img
            src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1709900553/improve-your-ecommerce-website-design-1_ybhewq.jpg"
            alt="login"
            className="login"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <h1 className="login-heading">Login To Required Fields</h1>

            <label className="label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              className="input"
              id="username"
              value={userName}
              placeholder="Please Enter Your Name"
              onChange={this.onChangeName}
            />

            <label className="label" htmlFor="email">
              EMAIL ID
            </label>
            <input
              type="text"
              className="input"
              id="email"
              value={email}
              placeholder="Please Enter Email ID"
              onChange={this.onChangeEmail}
            />

            <label className="label" htmlFor="number">
              PHONE NUMBER
            </label>
            <input
              type="password"
              className="input"
              id="number"
              value={number}
              placeholder="Please Enter Phone Number"
              onChange={this.onChangeNumber}
            />

            <button className="login-button" type="submit">
              Login
            </button>
            {errorMsg ? (
              <p className="error-msg">*Please Enter Required Field</p>
            ) : null}
          </form>
        </div>
      </div>
    );
  }
}
export default LoginPage;
