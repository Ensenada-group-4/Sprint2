import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import GrayScaleButton from "./GrayScaleButton";
import SearchBar from "./SearchBar";
import { CogIcon, UsersGrid, HomeIcon, Profile, ListUser } from "./fontawesome";
import Logout from "./Logout";
import { Logo } from "../logo/Logo";
import NavBarIcon from "./NavBarIcon";
import FaTableButton from "./OpenTable";
import {
  faAddressBook,
  faHome,
  faUser,
  faCog,
  faTable,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("role") === "admin"
  );

  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const navIcons = document.querySelector(".nav-icons");
    if (isMenuOpen) {
      navIcons.classList.add("activado");
    } else {
      navIcons.classList.remove("activado");
    }
  };
  function getUserId() {
    return localStorage.getItem("userId");
  }

  function handleProfileClick() {
    const userId = getUserId();
    window.location.href = `/profile/${userId}`;
  }

  useEffect(() => {
    const handleResize = () => {
      setIsSearchVisible(window.innerWidth < 500);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function isActive(pathname) {
    return location.pathname === pathname;
  }

  const navIcons = [
    {
      link: "/home",
      icon: faHome,
      title: "Inicio",
      component: <HomeIcon />,
      activeColor: "lightskyblue",
    },
    {
      link: `/profile/${getUserId()}`,
      icon: faUser,
      title: "Mi Perfil",
      component: <Profile />,
      onClick: handleProfileClick,
      activeColor: "lightskyblue",
    },
    {
      link: "/users",
      icon: faAddressBook,
      title: "Amigos",
      component: <UsersGrid />,
      activeColor: "lightskyblue",
    },

    {
      link: "/edit",
      icon: faCog,
      title: "Configuración",
      component: <CogIcon />,
      onClick: handleProfileClick,
      activeColor: "lightskyblue",
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="row nav-body">
            <div className="col">
              <a className="navbar-brand" href="/home">
                <Logo className="keybook-logo d-block" />
              </a>
              <div className="slogan-container-nav">
                <h2>Donde los programadores comparten sus claves</h2>
              </div>
            </div>

            <div className="d-none d-lg-block">
              <SearchBar />
            </div>
            <div className="col-3 col-sm-1">
              <button
                className={`navbar-toggler ${isMenuOpen ? "girar" : ""}`}
                type="button"
                onClick={toggleMenu}
              >
                <span className={`br-1 ${isMenuOpen ? "animado" : ""}`}></span>
                <span className={`br-2 ${isMenuOpen ? "animado" : ""}`}></span>
                <span className={`br-3 ${isMenuOpen ? "animado" : ""}`}></span>
              </button>
            </div>
            <div
              className={`collapse navbar-collapse col-sm-7 col-lg-6 ${
                isMenuOpen ? "show" : ""
              }`}
              id="navbarNav"
            >
              <div
                className="overlay"
                style={{ display: isMenuOpen ? "block" : "none" }}
              ></div>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-icons">
                {navIcons.map((icon) => (
                  <NavBarIcon
                    key={icon.title}
                    link={icon.link}
                    icon={icon.icon}
                    title={icon.title}
                    component={icon.component}
                    isActive={() => isActive(icon.link)}
                    activeColor={icon.activeColor}
                    isAdmin={isAdmin}
                  >
                    <NavLink
                      exact
                      to={icon.link}
                      isActive={() => isActive(icon.link)}
                      onClick={toggleMenu}
                    >
                      {icon.component}
                    </NavLink>
                  </NavBarIcon>
                ))}
                {/* Muestra la tabla de usuarios solo si el usuario logeado es administrador */}

                {isAdmin && (
                  <li className="nav-item">
                    <FaTableButton className="dropdown-item active" />
                  </li>
                )}
                {/* Funcionalidad blanco y negro */}
                <li className="nav-item">
                  <GrayScaleButton className="dropdown-item active"></GrayScaleButton>
                </li>
                {/*Logout*/}
                <li className="nav-item">
                  <Logout className="dropdown-item active" id="logout"></Logout>
                </li>
                <li className="nav-item search-bar-dropdown d-lg-none  mx-auto">
                  <SearchBar />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
