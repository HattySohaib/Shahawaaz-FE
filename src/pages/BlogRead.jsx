import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";

import "./BlogRead.css";
import dp from "../assets/dp.jpg";

function BlogRead() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [banner, setBanner] = useState(null);
  const [published, setPublished] = useState([]);

  const ref = useRef();

  useEffect(() => {
    if (id) {
      fetch(`/api/blog-details?blog=${id}`)
        .then((res) => res.json())
        .then((blogData) => {
          setTitle(blogData.title);
          setCategory(blogData.category);
          setContent(blogData.content);
          setBanner(blogData.banner);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetch("/api/get-published", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setPublished(data))
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const showRecommendations = () => {
    ref.current.classList.toggle("show");
  };

  return (
    <div id="blog-read">
      <div className="banner-container">
        <img src={banner} alt="" />
      </div>
      <div className="blogread-info">
        <p className="blogread-title">{title}</p>
        <p className="blogread-category">{category}</p>
      </div>
      <div className="data-container">
        <button className="rec-btn" onClick={showRecommendations}>
          See Recommendations
        </button>
        <div className="left-pane" ref={ref}>
          <p>Recommended Blogs</p>
          <br />
          {published.map((e, key) => (
            <Link to={`/read-this-blog/${e._id}`} className="blog-rec">
              <p className="blog-title">{e.title}</p>
            </Link>
          ))}
        </div>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <div className="right-pane">
          <p>About the author</p>
          <br />
          <div className="dp">
            <img src={dp} alt="" />
          </div>
          <div className="profile-details">
            <h2>Sahabaj Alam Khan</h2>
            <p>Marketing Specialist</p>
          </div>
          <div className="about-para">
            I do content marketing for solar power companies. I have worked as a
            writer, SEO, and content marketer for 8+ years and I will love to
            bring those results for you as well. <br /> <br /> I will improve
            your local search ranking along with your presence on google search
            for target queries. I have an inventory of resources cutomized for
            promoting solar power brands. If these are your business goals, we’d
            love to help you out.
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogRead;
