import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";

function GrayScaleButton(props) {
  const [isGrayScale, setIsGrayScale] = useState(false);

  const toggleGrayScale = () => {
    setIsGrayScale(!isGrayScale);
  };

  useEffect(() => {
    const body = document.body;
    if (isGrayScale) {
      body.style.filter = "grayscale(100%)";
    } else {
      body.style.filter = "none";
    }
    return () => {
      body.style.filter = "none";
    };
  }, [isGrayScale]);

  return (
    <button
      className={`dropdown-item ${props.isActiveLink ? "active" : ""}`}
      onClick={toggleGrayScale}
    >
      <FontAwesomeIcon
        icon={faInfinity}
        className="icon"
        title="Blanco y Negro"
      />
      {props.children}
    </button>
  );
}

export default GrayScaleButton;
