import React, { useState } from "react";
import "./LogIn.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import google from "../../images/google-icon.png";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  if (user1) {
    navigate(from, { replace: true });
  }

  const handleUserLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div className="form-inner-container">
        <h2 className="form-title">LogIn </h2>
        <form onSubmit={handleUserLogin} action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type={visible ? "text" : "password"}
              name="password"
              id=""
            />
            <span
              className="passVisibility"
              onClick={() => setVisible(!visible)}
            >
              {visible ? "Show" : "Hide"}
            </span>
          </div>
          <p> {error?.message}</p>
          {loading && <Loading></Loading>}
          <input className="form-submit" type="submit" value="LogIn" />
        </form>
        <p>
          New to Amazon?{" "}
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
        <div className="line-group">
          <div className="line"></div>
          <div>or</div>
          <div className="line"></div>
        </div>
        <div className="signIn-btn">
          <p> {error1?.message}</p>
          {loading1 && <Loading></Loading>}
          <button onClick={() => signInWithGoogle()}>
            {" "}
            <span>
              <img src={google} alt="google" />
            </span>
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
