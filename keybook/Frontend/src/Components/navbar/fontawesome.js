import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faSignOutAlt,
  faAddressBook,
  faHome,
  faUser,
  faCog,
  faInfinity,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faSearch, faSignOutAlt);
library.add(faAddressBook, faHome, faUser, faCog, faInfinity);

const CogIcon = () => {
  return <FontAwesomeIcon icon={faCog} />;
};

const UsersGrid = () => {
  return <FontAwesomeIcon icon={faAddressBook} />;
};

const HomeIcon = () => {
  return <FontAwesomeIcon icon={faHome} />;
};

const Profile = () => {
  return <FontAwesomeIcon icon={faUsers} />;
};
export { CogIcon, UsersGrid, HomeIcon, Profile };
