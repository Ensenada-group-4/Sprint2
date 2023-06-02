import logo from "./logo.png";

//Reusable logo component

export const Logo = ({ className}) => {
  return (
    <img src={logo} alt="Keybook logo" className={className} />
  );
};