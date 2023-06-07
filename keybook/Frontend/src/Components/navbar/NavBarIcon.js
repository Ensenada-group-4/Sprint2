import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIsActive } from "./UseIsActive";

function NavBarIcon({ link, icon, title, component, activeColor }) {
  const { isActive } = useIsActive();

  const isActiveFunction = () => isActive(link);

  return (
    <li className="nav-item">
      <a
        className={`dropdown-item ${isActiveFunction() ? "active" : ""}`}
        href={link}
        title={title}
      >
        <FontAwesomeIcon
          link={link}
          icon={icon}
          title={title}
          className={`icon ${isActiveFunction() ? "active" : ""}`}
          style={{ color: isActiveFunction() ? activeColor : "" }}
        />
      </a>
    </li>
  );
}

export default NavBarIcon;
