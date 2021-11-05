import React from "react";
// Images
import iconSearch from "./images/icon-search.svg";
// Styles
import "./UserForm.styles.css";
const UserForm = ({ handleUserData, handleUserName }) => {
  return (
    <div className="container-user">
      <form className="form-user" onSubmit={(event) => handleUserData(event)}>
        <div className="container-search-input">
          <figure className="icon-search">
            <img src={iconSearch} alt="iamgen" />
          </figure>
          <input
            type="search"
            className="input-text"
            placeholder="Search Github username..."
            onChange={({ target }) => handleUserName(target)}
          />
        </div>

        <input className="input-button" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default UserForm;
