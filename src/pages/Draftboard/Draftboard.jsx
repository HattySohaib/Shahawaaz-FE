import React, { useState, useEffect } from "react";
import "./Draftboard.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import SearchBar from "../../components/SearchBar/SearchBar";
import Draft from "../../components/Draft/Draft";

import { useRefresh } from "../../contexts/refresh";

function Draftboard() {
  const [drafts, setDrafts] = useState([]);
  const { refresh } = useRefresh();
  const { setRefresh } = useRefresh();
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/get-drafts", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setDrafts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refresh, setRefresh]);

  const handleOnCategoryChange = (e) => {
    if (e === "All") setCategory("");
    else setCategory(e);
  };

  const handleOnSearchChange = (e) => {
    setSearchTerm(e);
  };

  const filteredDrafts = drafts.filter(
    (blog) =>
      blog.category.toLowerCase().includes(category.toLowerCase()) &&
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="draftboard">
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
      <div className="drafts-container">
        {!filteredDrafts.length && (
          <p className="blank-text">No records found.</p>
        )}
        {filteredDrafts.map((e, key) => (
          <Draft key={key} id={e._id} label={e.title} featured={e.featured} />
        ))}
      </div>
    </div>
  );
}

export default Draftboard;
