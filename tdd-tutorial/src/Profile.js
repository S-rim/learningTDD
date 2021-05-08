import React from "react";

const Profile = ({ username, name }) => {
  return (
    <div>
      <strong>{username}</strong>
      <span>({name})</span>
    </div>
  );
};

export default Profile;
