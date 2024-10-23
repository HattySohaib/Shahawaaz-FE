import React from "react";
import { toast } from "react-toastify";
import "./BlogCard.css";
import { Link } from "react-router-dom";
import { useRefresh } from "../../contexts/refresh.js";

import rightIcon from "../../assets/dashboard_icons/right.png";
import draftIcon from "../../assets/dashboard_icons/draft.png";
import editIcon from "../../assets/dashboard_icons/edit.png";
import favIcon from "../../assets/dashboard_icons/fav.png";

function BlogCard({ img, title, category, date, preview, featured, id }) {
  const { setRefresh } = useRefresh();

  function truncate(text, maxAllowed) {
    if (text.length > maxAllowed) {
      text = text.slice(0, maxAllowed) + "...";
    }
    return text;
  }

  const handleDraft = () => {
    fetch(`/api/move-to-drafts?blog=${id}`, { method: "POST" })
      .then((res) => res.json())
      .then((result) => {
        setRefresh((prev) => !prev);
        toast.success(result);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleFeaturedToggle = () => {
    fetch(`/api/toggle-blog-feature?blog=${id}`, { method: "POST" })
      .then((res) => res.json())
      .then((result) => {
        setRefresh((prev) => !prev);
        toast.success(result);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

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
      <div className="blog-card-actions">
        <button onClick={handleDraft} className="blog-action">
          <img src={draftIcon} alt="" />
          Unpublish
        </button>
        <button onClick={handleFeaturedToggle} className="blog-action">
          <img src={favIcon} alt="" />
          {featured ? "Unfeature" : "Feature"}
        </button>
        <Link className="nav-link" to={`/editor/${id}`}>
          <button className="blog-action">
            <img src={editIcon} alt="" />
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
