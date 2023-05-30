import React from "react";

export const ButtonDefault = ({ content, type, className, onClick, style }) => {
  return (
    <button
      type={type}
      className={`btn btn-warning btn-lg ${className}`}
      onClick={onClick}
      id="register-form-buttons"
      style={{ style }}>
      {content}
    </button>
  );
};
