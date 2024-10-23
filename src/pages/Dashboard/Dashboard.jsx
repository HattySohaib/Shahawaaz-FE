import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import BlogCard from "../../components/BlogCard/BlogCard";
import { useRefresh } from "../../contexts/refresh";
import Dropdown from "../../components/Dropdown/Dropdown";
import SearchBar from "../../components/SearchBar/SearchBar";

function Dashboard() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [published, setPublished] = useState([]);
  const { refresh } = useRefresh();

  useEffect(() => {
    fetch("/api/get-published", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setPublished(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refresh]);

  const handleOnCategoryChange = (e) => {
    if (e === "All") setCategory("");
    else setCategory(e);
  };

  const handleOnSearchChange = (e) => {
    setSearchTerm(e);
  };

  const filteredIPublished = published.filter(
    (blog) =>
      blog.category.toLowerCase().includes(category.toLowerCase()) &&
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="dashboard">
      <div className="top-bar">
        <SearchBar
          placeholder={"Search using a keyword"}
          onSearch={handleOnSearchChange}
        />
        <div className="dropdowns">
          <Dropdown
            text={"Category :"}
            defaultText="All"
            options={[
              "All",
              "Sustainability",
              "Travel",
              "Lifestyle",
              "Content Marketing",
              "Electric Vehicles",
              "Solar Power",
            ]}
            onSelect={handleOnCategoryChange}
          />
        </div>
      </div>
      <div className="recents-container">
        {!filteredIPublished.length && (
          <p className="blank-text">No records found.</p>
        )}
        {filteredIPublished.map((e, key) => (
          <BlogCard
            img={e.banner}
            title={e.title}
            category={e.category}
            date={e.date}
            preview={e.meta}
            featured={e.featured}
            key={key}
            id={e._id}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
