import "./App.css";
import React from "react";
import { connect } from "react-redux";

const menuItems = [
  { id: 1, label: "Inicio", subMenu: null },
  { id: 2, label: "Sobre mí", subMenu: null },
  {
    id: 3,
    label: "Paradigma",
    subMenu: [
      { id: 31, label: "Artículos sugeridos", link: "/articulos" },
      { id: 32, label: "Actividades", link: "/actividades" },
      { id: 33, label: "Servicios", link: "/servicios" },
    ],
  },
  { id: 4, label: "Páginas sugeridas", subMenu: null },
  { id: 5, label: "Formulario de contacto", subMenu: null },
];

const NavItem = ({ item, isActive, onMouseEnter, onMouseLeave }) => {
  const hasSubMenu = item.subMenu !== null;

  return (
    <li
      className={`w-12 h-12 rounded-full flex justify-center items-center cursor-pointer transition-colors duration-300 ${
        isActive ? "bg-gray-900" : "bg-gray-800 hover:bg-gray-700"
      }`}
      onMouseEnter={() => hasSubMenu && onMouseEnter(item)}
      onMouseLeave={() => hasSubMenu && onMouseLeave(item)}
    >
      {item.label}
    </li>
  );
};

const SubMenuItem = ({ item }) => {
  return (
    <li className="p-2">
      <a href={item.link}>{item.label}</a>
    </li>
  );
};

const NavSubMenu = ({ subMenu }) => {
  return (
    <ul className="absolute top-full left-0 z-10 bg-gray-800 p-4 rounded-lg shadow-lg">
      {subMenu.map((item) => (
        <SubMenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSubMenuId: null,
    };
  }

  handleMouseEnter = (item) => {
    this.setState({ activeSubMenuId: item.id });
  };

  handleMouseLeave = (item) => {
    this.setState({ activeSubMenuId: null });
  };

  render() {
    const { activeSubMenuId } = this.state;
    const { activeItemId } = this.props;

    return (
      <nav className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <ul className="flex">
          {menuItems.map((item) => (
            <React.Fragment key={item.id}>
              <NavItem
                item={item}
                isActive={item.id === activeItemId}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              />
              {item.subMenu !== null && activeSubMenuId === item.id && (
                <NavSubMenu subMenu={item.subMenu} />
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeItemId: state.activeItemId,
  };
};

export default connect(mapStateToProps)(NavMenu);
