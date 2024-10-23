import React from "react";

function Admin({ name, role, email, phone, id }) {
  return (
    <div className="complaint">
      <p className="complaint-value">{name}</p>
      <p className={"complaint-value"}>{role}</p>
      <p className="complaint-value">{email}</p>
      <p className="complaint-value">{phone}</p>
      <div className="actions">
        <p>Actions here</p>
      </div>
    </div>
  );
}

export default Admin;
