import React from "react";
import profileImage from "./alaa.png";


const Profile = ({ fullName, bio, profession, children, handleName }) => {
  const profileStyle = {
    backgroundColor: "#f2f2f2",
    padding: "20px",
    borderRadius: "5px",
    marginBottom: "20px",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={profileStyle}>
    <img src={children} alt="Profile" height={150} width={150} style={{borderRadius: 100}}/>
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <button style={buttonStyle} onClick={()=> handleName (fullName)}>
        Show Name
      </button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Alàa Chiba",
  bio: "No bio available",
  profession: "Software engineer",
};

export default Profile;
