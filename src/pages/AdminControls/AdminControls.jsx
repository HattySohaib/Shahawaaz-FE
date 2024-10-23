import React from "react";
import Admins from "../../components/Admins/Admins";
import LeftPanel from "../../components/SidePanel/SidePanel";

function AdminControls() {
  return (
    <div id="admin-controls">
      <LeftPanel />
      <div className="right">
        <Admins />
      </div>
    </div>
  );
}

export default AdminControls;
