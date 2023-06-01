import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Logout = () => {
  const logout = () => {
    localStorage.removeItem("token");
    alert("Ha cerrado sesión. Volviendo a página de inicio");
    window.location.href = "/";
  };
  return (
    <FontAwesomeIcon
      icon={faSignOutAlt}
      className="icon"
      title="Desconectarse"
      onClick={logout}
    />
  );
};
export default Logout;
