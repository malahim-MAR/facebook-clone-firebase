import React, { useState } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setMsg("*Please fill all the fields");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Navigate only on success
    } catch (error) {
      console.error("Login error:", error);
      setMsg("*Invalid email or password");
    }
  };

  return (
    <div className="login">
      <p className="text-red-500">{msg}</p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
