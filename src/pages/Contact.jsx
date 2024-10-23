import React from "react";
import "./Contact.css";
import batman from "../assets/batman.jpg";
function Contact() {
  return (
    <div className="contact">
      <div className="header">
        <h1>
          You Can Reach <br /> Me Through
        </h1>
      </div>
      <div className="contact-details">
        <h2>
          <span>My Mail:</span>sahabaj@shahawaaz.in
        </h2>
        <h2>
          <span>My Other Mail:</span>dasahabaj.sak@gmail.com
        </h2>
        <h2>
          <span> My Calendly Meet:</span>
          <a href="https://calendly.com/sahabaj/30min">Here</a>
        </h2>
        <h2>
          <span>My Skype:</span>dasahabaj
        </h2>
        <h2>
          <span>My BatMail:</span>
          <i>This feature is currently available only in Gotham.</i>
        </h2>
      </div>
      <p className="add-text">*Have you seen me and Batman at the same time?</p>
      <p className="add-text">No one has.</p>
      <img className="batman-img" src={batman} alt="" />
    </div>
  );
}

export default Contact;
