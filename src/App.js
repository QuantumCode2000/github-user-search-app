import React, { useState } from "react";
import "./App.css";
// Components
import UserForm from "./components/UserForm/UserForm";
import Loader from "./components/Custom/Loader/Loader";
import GitHubUser from "./components/Custom/GitHubUser/GitHubUser";

function App() {
  //useState
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState(null);

  // Functions
  const handleUserName = ({ value }) => {
    setUserName(value);
  };

  const handleUserData = async (event) => {
    event.preventDefault();
    setUserData(null);
    setLoading(true);
    const API = `https://api.github.com/users/${userName}`;
    const response = await fetch(API);
    const result = await response.json();
    console.log(result);
    setUserData(result);
    setLoading(false);
  };
  return (
    <div className="container">
      <UserForm
        handleUserData={handleUserData}
        handleUserName={handleUserName}
      />
      {loading ? <Loader /> : null}
      {userData ? (
        <GitHubUser
          avatar={userData?.avatar_url}
          github={userData?.html_url}
          github_name={userData?.login}
          name={userData?.name}
          public_repos={userData?.public_repos}
          followers={userData?.followers}
          following={userData?.following}
          create_date={userData?.created_at}
          bio={userData?.bio}
          company={userData?.company}
          twitter={userData?.twitter_username}
          blog={userData?.blog}
          location={userData?.location}
        />
      ) : null}
    </div>
  );
}

export default App;
