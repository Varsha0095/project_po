import React from "react";
import "./Header.css";

const Header = ({ user }) => {
  return (
    <div className="header">
      <h5>Profile</h5>
      <img
        src={user.profilepicture}
        style={{
          height: "80px",
          width: "80px",
          borderRadius: "50%",
          objectFit: "contain",
        }}
        alt="userPhoto"
      />
      <h6>{user.username}</h6>
    </div>
  );
};

export default Header;
