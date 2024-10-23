import React from "react";
import { Link } from "react-router-dom";

import rightIcon from "../../assets/dashboard_icons/right.png";

function BlogCard({ img, title, category, date, preview, id }) {
  function truncate(text, maxAllowed) {
    if (text.length > maxAllowed) {
      text = text.slice(0, maxAllowed) + "...";
    }
    return text;
  }
  return (
    <div className="blog-card">
      <div>
        <img className="blog-card-img" src={img} alt="featured " />
        <div className="blog-card-details">
          <p className="blog-card-title">{truncate(title, 50)}</p>
          <p className="blog-card-preview">{truncate(preview, 70)}</p>
        </div>
      </div>
      <div>
        <div className="blog-card-extras">
          <span className="blog-card-category">{category}</span>
          <Link className="read-more-blog-btn" to={`/read-this-blog/${id}`}>
            <span> Read More </span>
            <img src={rightIcon} alt="" />
          </Link>
        </div>
        <div className="blog-card-info">
          <span className="blog-card-author">Sahabaj Alam Khan</span>
          <span className="blog-card-date">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
