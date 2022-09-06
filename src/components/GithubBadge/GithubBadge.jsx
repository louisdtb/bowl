import React from "react";
import "./GithubBadge.scss";
import { ReactComponent as GithubLogo } from "../../resources/github-logo.svg";

const GithubBadge = () => {
  return (
    <a
      href="https://github.com/louisdtb/Bowl-app"
      rel="noreferrer"
      target="_blank"
      className="github-badge_component"
    >
      <GithubLogo></GithubLogo>
      <div>View on Github</div>
    </a>
  );
};

export default GithubBadge;
