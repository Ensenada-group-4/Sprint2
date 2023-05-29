import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBarIcon({ link, icon, title }) {
  return (
    <li className="nav-item">
      <a className="dropdown-item active" href={link} title={title}>
        <FontAwesomeIcon
          link={link}
          icon={icon}
          title={title}
          className="icon"
        />
      </a>
    </li>
  );
}

export default NavBarIcon;
