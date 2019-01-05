import React from "react";

const Footer = props => {
  return (
    <div>
      <div class="text-center pt-3">
        This project was hacked by
        <a href={props.gitProf} className="badge badge-warning  ml-2">
          {props.hackerName} &nbsp;
          <i class="fab fa-github" />
        </a>
        <a href={props.gitRepo} className="badge badge-warning  ml-2">
          Git Repo &nbsp;
          <i class="fas fa-code-branch" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
