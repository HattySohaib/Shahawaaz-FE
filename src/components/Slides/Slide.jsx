// src/Slide1.js
import React from "react";
import "./Slide.css";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";

const Slide = ({ header, preview, bannerimg, id }) => (
  <div className="featured-card">
    <div className="featured-card-img">
      <img src={bannerimg} alt="" />
    </div>
    <div className="icon-wrapper">
      <img className="arrow-icon" src={arrow} alt="" />
    </div>
    <div className="featured-card-data">
      <p className="featured">Featured</p>
      <h2 className="header">{header}</h2>
      <p className="preview">{preview}</p>
      <Link to={`/read-this-blog/${id}`} className="read-btn">
        Read More <span class="material-symbols-outlined">arrow_outward</span>
      </Link>
    </div>
  </div>
);

export default Slide;
