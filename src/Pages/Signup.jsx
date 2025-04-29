import React, { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    const email = event.target.children[0].value;
    const password = event.target.children[1].value;

    if (email === "" || password === "") {
      setMsg("Please Fill The Form Fields");
      setLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMsg("Successfully Signed Up!");
      event.target.reset();
      navigate("/Login");
    } catch (error) {
      setMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="SignUp">
        {msg}
        <form onSubmit={submitHandler}>
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button>Signup </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
