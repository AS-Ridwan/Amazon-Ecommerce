import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import google from "../../images/google-icon.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error1, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, user1, loading1, error2] = useSignInWithGoogle(auth);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };
  if (user) {
    navigate("/shop");
  }
  if (user1) {
    navigate("/shop");
  }
  const createNewUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Your Password not matching");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <div className="form-container">
        <div className="form-inner-container">
          <h2 className="form-title">Sign Up </h2>
          <form onSubmit={createNewUser} action="">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input onBlur={handleEmailBlur} type="email" name="email" id="" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onBlur={handlePasswordBlur}
                type="password"
                name="password"
                id=""
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                onBlur={handleConfirmPasswordBlur}
                type="password"
                name="confirm-password"
                id=""
              />
            </div>
            <p style={{ color: "red" }}>{error1?.message}</p>
            <p> {error?.message}</p>
            {loading && <Loading></Loading>}
            <input className="form-submit" type="submit" value="Sign Up" />
          </form>
          <p>
            Already have an account?{" "}
            <Link className="form-link" to="/login">
              LogIn
            </Link>
          </p>
          <div className="line-group">
            <div className="line"></div>
            <div>or</div>
            <div className="line"></div>
          </div>
          <div className="signIn-btn">
            <p> {error2?.message}</p>
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
    </div>
  );
};

export default SignUp;
