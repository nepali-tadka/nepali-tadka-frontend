import React, { useContext } from "react";

import { AuthContext } from "../../context/auth.context";
import "./my-profile.css";

const MyProfile = () => {
  const { getUser } = useContext(AuthContext);
  const user = getUser();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-details">
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>First Name:</strong> {user.firstname}
        </p>
        <p>
          <strong>Last Name:</strong> {user.lastname}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
