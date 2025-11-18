import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Home.module.css";

import logo from "../pic/logo.png";
import t1 from "../pic/t1.jpg";
import t2 from "../pic/t2.jpg";
import t3 from "../pic/t3.jpg";
import t4 from "../pic/t4.jpg";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleStartBuilding = () => {
    navigate("/Customize");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.parent1}>
          <div className={styles.c1}>
            <img src={logo} alt="logo" className={styles.i1} />
            <h1 className={styles.h1}>Resumify</h1>
          </div>

          <div className={styles.buttons}>
            {/* LOGIN BUTTON FIXED */}
            <button
              className={`${styles.b1} ${
                location.pathname === "/login" ? styles.active : ""
              }`}
              onClick={handleLogin}
            >
              Log in
            </button>

            {/* SIGNUP BUTTON FIXED */}
            <button
              className={`${styles.b2} ${
                location.pathname === "/signup" ? styles.active : ""
              }`}
              onClick={handleSignUp}
            >
              Sign up
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.parent2}>
          <div className={styles.d1}>
            <h2 className={styles.h2}>Build Your Resume in Minutes</h2>
          </div>
          <div className={styles.d2}>
            <p className={styles.p1}>
              Create professional, ATS-friendly resumes with our Resumify.
            </p>
          </div>
          <div className={styles.d3}>
            <p className={styles.p2}>
              Stand out from the crowd and land your dream job.
            </p>
          </div>
          <div className={styles.d4}>
            <button className={styles.b3} onClick={handleStartBuilding}>
              Start Building Now
            </button>
          </div>
          <div className={styles.d5}>
            <h3 className={styles.h5}>
              ✓ No Credit Required &nbsp;&nbsp; ✓ Free Templates
              &nbsp;&nbsp; ✓ AI-Powered
            </h3>
          </div>
        </section>

        <div className={styles.parent3}>
          <h3 className={styles.h3}>Choose Your Perfect Template</h3>
          <h4 className={styles.h4}>
            Professional templates designed by experts, optimized for ATS
            systems
          </h4>
        </div>

        <div className={styles.parent4}>
          <div className={styles.dd1}>
            <img src={t1} alt="template1" className={styles.i2} />
            <h4 className={styles.h7}>Modern Format</h4>
            <p className={styles.p7}>Clean and contemporary design</p>
          </div>

          <div className={styles.dd2}>
            <img src={t4} alt="template2" className={styles.i3} />
            <h4 className={styles.h8}>Creative Designer</h4>
            <p className={styles.p7}>Perfect for creative professionals</p>
          </div>

          <div className={styles.dd3}>
            <img src={t3} alt="template3" className={styles.i4} />
            <h4 className={styles.h9}>Executive Classic</h4>
            <p className={styles.p7}>Traditional and authoritative</p>
          </div>

          <div className={styles.dd4}>
            <img src={t2} alt="template4" className={styles.i5} />
            <h4 className={styles.h10}>Minimal Clean</h4>
            <p className={styles.p7}>Simple and elegant design</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        © 2025 Resumify | All rights reserved.
      </footer>
    </>
  );
}

export default Home;
