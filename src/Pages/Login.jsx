import React, { useState } from "react";
import {auth} from "../config/firebase";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email = ", email); // Now it will log the correct email
    console.log("password = ", password); // Now it will log the correct email
    console.log("Login Button Clicked");
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    event.target.reset(); // empty form values
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            value={email}
            onChange={handleChangeEmail}
            required
          />
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
