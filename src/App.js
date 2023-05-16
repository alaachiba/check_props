import './App.css';
import Profile from './profile/Profile';
import profileImage from "./profile/alaa.png";


function App() {
  const handleName = (name) => {
    alert("Hello "+ name);
  };
  return (
    <div>
    <h1>My Profile App</h1>
    <Profile
      fullName={"John Smith"}
      bio={"Software Engineer"}
      profession={"Full Stack Developer"}
      handleName={handleName}
    >
       {profileImage}
    </Profile>
  </div>
  );
}

export default App;
