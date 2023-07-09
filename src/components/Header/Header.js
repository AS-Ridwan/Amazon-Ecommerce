import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/amazon.png";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <nav className="header navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-ul navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/orders" className="nav-link">
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              {user ? (
                <button className="log-btn nav-link" onClick={handleLogOut}>
                  LogOut
                </button>
              ) : (
                <Link className="log-btn nav-link" to="/login">
                  LogIn
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

// <nav className="header">
// <Link to="/">
//   <img src={logo} alt="logo" />
// </Link>

// <div>
//   <Link to="/home">Home</Link>
//   <Link to="/shop">Shop</Link>
//   <Link to="/orders">Orders</Link>
//   <Link to="/about">About</Link>

//   {user ? (
//     <button className="log-btn" onClick={handleLogOut}>
//       LogOut
//     </button>
//   ) : (
//     <Link className="log-btn" to="/login">
//       LogIn
//     </Link>
//   )}
// </div>
// </nav>
