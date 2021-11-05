import React from "react";

//Styles
import "./GitHubUser.styles.css";
const GitHubUser = (props) => {
  const {
    company,
    twitter,
    blog,
    location,
    bio,
    avatar,
    github,
    github_name,
    name,
    public_repos,
    followers,
    following,
    create_date,
  } = props;
  let datesegments = create_date.split("T").shift().split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="card-container">
      <div className="user-data">
        <figure className="user-data-image">
          <img src={avatar} alt={github_name} />
        </figure>
        <div className="user-data-data">
          <div className="user-data-dates">
            <h1 className="user-data-name">{name ?? "Not Available"}</h1>
            <p className="user-data-github">
              <a href={github}>@{github_name}</a>
            </p>
          </div>
          <p className="user-data-init">
            Joined {datesegments[2]} {months[datesegments[1] - 1]}{" "}
            {datesegments[0]}
          </p>
        </div>
      </div>
      <div className="user-bio">{bio ?? "This profile has no bio"}</div>
      <div className="user-work">
        <div className="user-work-dates">
          <div>Repos</div>
          <div>{public_repos}</div>
        </div>
        <div className="user-work-dates">
          <div>Followers</div>
          <div>{followers}</div>
        </div>
        <div className="user-work-dates">
          <div>Following</div>
          <div>{following}</div>
        </div>
      </div>
      <div className="user-network">
        <div>{location ?? "Not Available"}</div>
        <div>{blog ? blog : "Not Available"}</div>
        <div>{twitter ?? "Not Available"}</div>
        <div>{company ?? "Not Available"}</div>
      </div>
    </div>
  );
};

export default GitHubUser;
