import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import Admins from "../../components/Admins/Admins";

import "./Playground.css";

import LeftPanel from "../../components/SidePanel/SidePanel";
import Draftboard from "../Draftboard/Draftboard";
import { RefreshProvider } from "../../contexts/refresh";

function Panel() {
  return (
    <div id="playground">
      <div className="left">
        <LeftPanel />
      </div>
      <div className="right">
        <Routes>
          <Route
            path="/dashboard"
            element={
              <RefreshProvider>
                <Dashboard />
              </RefreshProvider>
            }
          />
          <Route
            path="/draftboard"
            element={
              <RefreshProvider>
                <Draftboard />
              </RefreshProvider>
            }
          />
          <Route path="/admin-controls" element={<Admins />} />
        </Routes>
      </div>
    </div>
  );
}

export default Panel;
