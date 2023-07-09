import React from "react";
import "./SharedBtn.css";

const SharedBtn = ({ children }) => {
  return (
    <>
      <button className="btn shared-btn">{children}</button>
    </>
  );
};

export default SharedBtn;
