import React from "react";
import "./About.css";

import dp from "../assets/dp.jpg";

function About() {
  return (
    <div id="about">
      <div className="header">
        <h1>About the Writer.</h1>
      </div>
      <div className="profile">
        <div className="dp">
          <img src={dp} alt="" />
        </div>
        <div className="profile-details">
          <h2>Sahabaj Alam Khan</h2>
          <p>Marketing Specialist</p>
        </div>
        <div className="about-para">
          I’m Sahabaj. I love to read fiction, visualize, and write. I create
          content on Philosophy, Literature, Marketing, and Career. <br />
          <br /> I work with B2B, B2C, and D2C brands and help them Reach and
          Intrigue their desired audience. <br />
          <br /> I’m transitioning into a Search Engine Optimization Specialist.
          I genuinely love analyzing traffic and chalking out plans to
          manipulate them. <br />
          <br /> I’m eager to become a Marketing Strategist one day. <br />
          <br /> Take Love and Hope.
        </div>
      </div>
    </div>
  );
}

export default About;
