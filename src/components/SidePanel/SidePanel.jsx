import React from "react";

import "./SidePanel.css";

import { NavLink, Link } from "react-router-dom";

import dashboard from "../../assets/icons/dash.png";
import draftboard from "../../assets/icons/draft.png";
import admin from "../../assets/icons/admin.png";
import category from "../../assets/icons/category.png";
import add from "../../assets/icons/add.png";
import logout from "../../assets/icons/logout.png";
import logo from "../../assets/logo.png";

function LeftPanel() {
  return (
    <div className="left">
      <section id="side-panel">
        <div className="logo-header">
          <Link to="/">
            <img src={logo} alt="Bloggest" />
          </Link>
        </div>
        <hr width="100%" color="#565656" />
        <div className="panel-container">
          <Link className="new-blog-btn" to="/editor">
            <img src={add} alt="" />
            New Blog
          </Link>
          <br />
          <hr width="100%" color="#565656" />
          <div className="navigation">
            <NavLink
              activeClassName="active"
              to="/admin-playground/dashboard"
              className="panel-nav-link"
            >
              <img src={dashboard} />
              Dashboard
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/admin-playground/draftboard"
              className="panel-nav-link"
            >
              <img src={draftboard} />
              Draftboard
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/admin-playground/admin-controls"
              className="panel-nav-link"
            >
              <img src={admin} />
              Admin Controls
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/admin-playground/categories"
              className="panel-nav-link"
            >
              <img src={category} />
              Category Controls
            </NavLink>
          </div>
          <hr width="100%" color="#565656" />
          <br />
          <NavLink activeClassName="active" to="/" className="panel-nav-link">
            Back to Home
          </NavLink>
          <div className="options">
            <NavLink
              activeClassName="active"
              to="/Account-settings"
              className="panel-nav-link"
            >
              <img src={logout} alt="logout" />
              Log Out
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LeftPanel;
