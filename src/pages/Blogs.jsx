import React, { useEffect, useState } from "react";
import "./Blogs.css";
import BlogCard from "../components/BlogCardRead/BlogCard";

function Blogs() {
  const [published, setPublished] = useState([]);

  useEffect(() => {
    fetch("/api/get-published", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setPublished(data))
      .catch((error) => {
        console.log(error);
      });
  }, [published]);

  return (
    <div id="blogs-page">
      <div className="header">
        <h1>Recent Blog Posts.</h1>
      </div>
      <div className="blogcards-container">
        {!published.length && <p className="blank-text">No records found.</p>}
        {published.map((e, key) => (
          <BlogCard
            img={e.banner}
            title={e.title}
            category={e.category}
            date={e.date}
            preview={e.meta}
            key={key}
            id={e._id}
          />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
