import React from 'react';
import githubLogo from '../images/github.png';

const Footer = () => {
  return (
    <div className="footer">
      Copyright © 2022 Faroukhamadi
      <a href="https://github.com/Faroukhamadi" target="_blank">
        <img src={githubLogo} alt="github" />
      </a>
    </div>
  );
};

export default Footer;
