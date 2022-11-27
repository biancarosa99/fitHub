import React, { useState } from "react";
import classes from "../styles/Register.module.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import axios from "axios";

const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userRegisterHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("auth/register", {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
      });
      if (res.status === 200) {
        console.log("User registered succesfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      console.log("error");
    }

    console.log(firstName, lastName, email, password, confirmPassword);
  };

  return (
    <React.Fragment>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <div className={classes["register-title-section"]}>
            <div className={classes["register-title"]}>Register</div>
            <button
              className={classes["close-button"]}
              onClick={props.closeRegister}
            >
              <CloseRoundedIcon />
            </button>
          </div>
          <form
            className={classes["form-section"]}
            onSubmit={userRegisterHandler}
          >
            <div className={classes["input-section"]}>
              <div className={classes["input-label"]}>Firstname</div>
              <input
                type="text"
                className={classes.input}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={classes["input-section"]}>
              <div className={classes["input-label"]}>Lastname</div>
              <input
                type="text"
                className={classes.input}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className={classes["input-section"]}>
              <div className={classes["input-label"]}>Email</div>
              <input
                type="email"
                className={classes.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={classes["input-section"]}>
              <div className={classes["input-label"]}>Password</div>
              <input
                type="password"
                className={classes.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={classes["input-section"]}>
              <div className={classes["input-label"]}> Confirm Password</div>
              <input
                type="password"
                className={classes.input}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className={classes["signup-section"]}>
              <span>Already have an account? </span>
              <span>
                <a className={classes.anchor}>Sign in Here</a>
              </span>
            </div>
            <button className={classes["register-button"]}>Register</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
