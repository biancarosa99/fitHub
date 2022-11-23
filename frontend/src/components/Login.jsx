import React from "react";
import classes from "../styles/Login.module.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const Login = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <div className={classes["login-title-section"]}>
            <div className={classes["login-title"]}>Login</div>
            <button
              className={classes["close-button"]}
              onClick={props.closeLogin}
            >
              <CloseRoundedIcon />
            </button>
          </div>
          <form className={classes["form-section"]}>
            <div className={classes["input-section"]}>
              <div className={classes["input-label"]}>Email</div>
              <input type="email" className={classes.input} />
            </div>
            <div className={classes["input-section"]}>
              <div className={classes["input-label"]}>Password</div>
              <input type="password" className={classes.input} />
            </div>
            <div className={classes["signup-section"]}>
              <span>Not yet registered? </span>
              <span>
                <a className={classes.anchor}>Sign up Here</a>
              </span>
            </div>
            <button className={classes["login-button"]}>Login</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
