import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // ✅ useNavigate import
import styles from "./Login.module.css";
import logo from "../pic/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false); // ✅ Success flag

  const navigate = useNavigate(); // ✅ navigation hook

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Login successful!");
        setIsSuccess(true);

        // ✅ Store token/user info
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // ✅ Redirect to Home page
        navigate("/"); 
      } else {
        setMessage(data.message || "Login failed");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error");
      setIsSuccess(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.leftSection}>
          <img src={logo} alt="Logo" className={styles.logoImg} />
          <h2 className={styles.brand}>Resumify</h2>
        </div>

        <ul className={styles.menu}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.normalLink
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/templates"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.normalLink
              }
            >
              Templates
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.normalLink
              }
            >
              Features
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* MAIN LOGIN GRID */}
     <div className={styles.signupContainer}>
           {/* LEFT PANEL */}
           <div className={styles.leftPanel}>
             <h2>Create professional resumes that get you hired.</h2>
             <p>Join thousands of successful job seekers.</p>
     
             <ul className={styles.features}>
               <li>✔ Professional templates designed by experts</li>
               <li>✔ ATS-friendly formats that pass screening</li>
               <li>✔ Real-time collaboration and feedback</li>
               <li>✔ Download in multiple formats (PDF, Word)</li>
             </ul>
     
             <div className={styles.testimonial}>
               <p>
                 <i>
                   “ResumablePro helped me land my dream job at Google!
                   The templates are amazing and the process is so simple.”
                 </i>
               </p>
     
               <div className={styles.userInfo}>
                 <div className={styles.avatarCircle}>JS</div>
                 <div>
                   <strong>Joss Smith JS</strong>
                   <p>Software Engineer at Google</p>
                 </div>
               </div>
             </div>
           </div>

        <div className={styles.rightPanel}>
          <div className={styles.authCard}>
            <h1>Welcome back</h1>
            <p className={styles.subtitle}>Sign in to your account</p>

            <form onSubmit={handleLogin}>
              <label>Email address</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className={styles.primaryBtn} type="submit">
                Sign In
              </button>

              {/* ✅ Message with green/red based on success */}
              {message && (
                <p style={{ color: isSuccess ? "green" : "red" }}>{message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
