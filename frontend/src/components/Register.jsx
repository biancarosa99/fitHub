import React from "react";
import classes from "../styles/Register.module.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const Register = () => {
  return (
    <React.Fragment>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <div className={classes["register-title-section"]}>
            <div className={classes["register-title"]}>Register</div>
            <button className={classes["close-button"]}>
              <CloseRoundedIcon />
            </button>
          </div>
          <form className={classes["form-section"]}>
            <div className={classes["input-section"]}>
              <div className={classes["input-label"]}>Firstname</div>
              <input type="text" className={classes.input} />
            </div>
            <div className={classes["input-section"]}>
              <div className={classes["input-label"]}>Lastname</div>
              <input type="text" className={classes.input} />
            </div>
            <div className={classes["input-section"]}>
              <div className={classes["input-label"]}>Email</div>
              <input type="email" className={classes.input} />
            </div>
            <div className={classes["input-section"]}>
              <div className={classes["input-label"]}>Password</div>
              <input type="password" className={classes.input} />
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
