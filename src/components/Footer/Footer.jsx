import React from "react";
import "./Footer.css";

import liw from "../../assets/liw.png";
import tww from "../../assets/tww.png";
import inw from "../../assets/inw.png";
import emw from "../../assets/emw.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">Let's get started on something great</p>
          <p className="footer-subtext">
            Drop a message or connect with me on social platforms.
          </p>

          <div className="social">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sahabaj-alam-khan-content-seo/"
            >
              <img src={liw} alt="" />
            </a>
            <a target="_blank" href="https://x.com/Da_Sahabaj">
              <img src={tww} alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/writer_marketeer/"
            >
              <img src={inw} alt="" />
            </a>
            <a target="_blank" href="mailto:sahabaj@shahawaaz.in">
              <img src={emw} alt="" />
            </a>
          </div>
        </div>
      </footer>
      <p className="copyright">Copyright © 2024</p>
    </>
  );
};

export default Footer;
