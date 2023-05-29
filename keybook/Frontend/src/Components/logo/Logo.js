import logo from "./logo.png";

export const Logo = ({ className}) => {
  return (
    <img src={logo} alt="Keybook logo" className={className} />
  );
};