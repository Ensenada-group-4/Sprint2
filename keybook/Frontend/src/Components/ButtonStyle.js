import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
function SubmitButton(props) {
  return (
    <button
      type={props.type}
      className={`icon-btn btn-post-btn  ${props.className}`}
      id={props.id}
      title={props.title}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
}

export default SubmitButton;
