// import React, { useState } from "react";
// import { auth } from "../config/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const submitHandler = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     const email = event.target.children[0].value;
//     const password = event.target.children[1].value;

//     if (email === "" || password === "") {
//       setMsg("Please Fill The Form Fields");
//       setLoading(false);
//       return;
//     }

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       setMsg("Successfully Signed Up!");
//       event.target.reset();
//       navigate("/Login");
//     } catch (error) {
//       setMsg(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="SignUp">
//         {msg}
//         <form onSubmit={submitHandler}>
//           <input type="email" placeholder="Enter Email" />
//           <input type="password" placeholder="Enter Password" />
//           <button>Signup </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiUserPlus, FiAlertCircle, FiCheckCircle } from "react-icons/fi";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const navigate = useNavigate();

  // Password strength calculator
  // const calculatePasswordStrength = (pass) => {
  //   let strength = 0;
  //   if (pass.length >= 6) strength += 1;
  //   if (pass.match(/[A-Z]/)) strength += 1;
  //   if (pass.match(/[0-9]/)) strength += 1;
  //   if (pass.match(/[^A-Za-z0-9]/)) strength += 1;
  //   return strength;
  // };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!email || !password) {
      setError("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("Account created! Redirecting...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.message.includes("weak-password")
        ? "Password should be at least 6 characters with mix of letters, numbers, and symbols"
        : "Email already in use");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-300 to-base-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-300"
      >
        <div className="card-body p-8">
          <div className="text-center mb-8">
            <FiUserPlus className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Join Our Community
            </h1>
            <p className="text-sm opacity-75">Create your account in seconds</p>
          </div>

          {/* Messages */}
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="alert alert-error rounded-lg py-3"
            >
              <FiAlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="alert alert-success rounded-lg py-3"
            >
              <FiCheckCircle className="w-5 h-5" />
              <span>{success}</span>
            </motion.div>
          )}

          <form onSubmit={handleSignup} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <FiMail className="w-4 h-4" />
                  Email Address
                </span>
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="input input-bordered w-full pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <FiLock className="w-4 h-4" />
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full pl-10"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordStrength(calculatePasswordStrength(e.target.value));
                }}
              />

              {/* Password Strength Indicator */}
              <div className="flex gap-1 mt-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 w-full rounded-full transition-all duration-300 ${
                      i < passwordStrength ? "bg-primary" : "bg-base-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              className={`btn btn-primary w-full gap-2 ${
                loading ? "loading btn-disabled" : ""
              }`}
            >
              {!loading && <FiUserPlus className="w-5 h-5" />}
              {loading ? "Creating Account..." : "Sign Up Now"}
            </button>
          </form>

          <div className="divider my-8">OR CONTINUE WITH</div>

          {/* Social Auth Placeholders */}
          <div className="flex gap-4 justify-center">
            <button className="btn btn-outline btn-circle hover:bg-base-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                {/* Google Icon */}
                <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a5.94 5.94 0 110-11.881c1.594 0 3.054.549 4.193 1.458l3.019-3.019A9.858 9.858 0 0012.545 2C7.021 2 2.545 6.477 2.545 12s4.476 10 10 10c5.523 0 10-4.477 10-10a9.9 9.9 0 00-.167-1.785z"/>
              </svg>
            </button>
            <button className="btn btn-outline btn-circle hover:bg-base-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                {/* GitHub Icon */}
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </button>
          </div>

          <div className="mt-8 text-center text-sm">
            <p className="opacity-75">
              By signing up, you agree to our
              <a href="#" className="link link-primary mx-1">Terms of Service</a>
              and
              <a href="#" className="link link-primary mx-1">Privacy Policy</a>
            </p>
            <p className="mt-4">
              Already have an account?{" "}
              <a href="/login" className="link link-primary font-semibold">
                Log In Now
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;

// import React, { useState } from "react";
// import { auth } from "../config/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");

//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setLoading(true);

//     if (!email || !password) {
//       setError("*Please fill all fields");
//       setLoading(false);
//       return;
//     }

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       setSuccess("Account created! Redirecting...");
//       setTimeout(() => navigate("/login"), 1500);
//     } catch (err) {
//       console.error("Signup error:", err);
//       setError(
//         err.message.includes("weak-password")
//           ? "*Password should be at least 6 characters"
//           : "*Email already in use"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200">
//       <div className="card w-full max-w-md bg-base-100 shadow-xl">
//         <div className="card-body">
//           <h2 className="card-title text-2xl font-bold mb-4">
//             Create an Account
//           </h2>

//           {/* Error Message */}
//           {error && (
//             <div className="alert alert-error p-2 mb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="stroke-current shrink-0 h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               <span>{error}</span>
//             </div>
//           )}

//           {/* Success Message */}
//           {success && (
//             <div className="alert alert-success p-2 mb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="stroke-current shrink-0 h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               <span>{success}</span>
//             </div>
//           )}

//           <form onSubmit={handleSignup}>
//             <div className="form-control mb-4">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="input input-bordered w-full"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="form-control mb-6">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="At least 6 characters"
//                 className="input input-bordered w-full"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <button
//               type="submit"
//               className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
//               disabled={loading}
//             >
//               {loading ? "Creating account..." : "Sign Up"}
//             </button>
//           </form>

//           <div className="mt-4 text-center">
//             <p className="text-sm">
//               Already have an account?{" "}
//               <a href="/login" className="link link-primary">
//                 Log In
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
