import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Account.module.css";
import logo from "../pic/logo.png";

export default function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      alert("Passwords do not match!");
      return;
    }

    const userData = { firstName, lastName, email, password };

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      // ✔ Correct success check (backend returns no "success")
      if (data.message === "Signup successful") {

        // save user
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Account created successfully!");

        // ✔ Redirect to Home (because this route exists)
        navigate("/");
      } else {
        alert(data.message || "Signup Failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error!");
    }
  };

  return (
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

      {/* RIGHT PANEL */}
      <div className={styles.rightPanel}>
        <div className={styles.authCard}>
          <h1>Create your account</h1>
          <p className={styles.subtitle}>
            Join thousands of professionals who trust ResumablePro
          </p>

          <form onSubmit={handleSignup}>
            <div className={styles.twoGrid}>
              <div>
                <label>First name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div>
                <label>Last name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <label>Email address</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              required
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Confirm password</label>
            <input
              type="password"
              required
              placeholder="Confirm your password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />

            <div className={styles.checkboxRow}>
              <input type="checkbox" required />
              <p className={styles.checkboxText}>
                I agree to the <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>
              </p>
            </div>

            <button type="submit" className={styles.primaryBtn}>
              Create account
            </button>

            <p className={styles.divider}>Or sign up with</p>

            <div className={styles.socialRow}>
              <button type="button" className={styles.socialBtn}>Google</button>
              <button type="button" className={styles.socialBtn}>Facebook</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
