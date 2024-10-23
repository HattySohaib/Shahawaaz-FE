import React, { useState, useEffect } from "react";
import "./Admins.css";
import Admin from "./Admin";
import { useRefresh } from "../../contexts/refresh";

function Admins() {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetch("/admin/get-admins", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setAdmins(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div id="complaints">
      <div className="top">
        <h1>Admins</h1>
      </div>
      <div className="headers">
        <p className="header-key">Name</p>
        <p className="header-key">Role</p>
        <p className="header-key">Email</p>
        <p className="header-key">Phone</p>
        <p className="header-key">Actions</p>
      </div>

      <div className="complaint-cards">
        {admins.map((admin, key) => (
          <Admin
            key={key}
            name={admin.name}
            role={admin.role}
            email={admin.email}
            phone={admin.phone}
            id={admin._id}
          />
        ))}
      </div>
    </div>
  );
}

export default Admins;
