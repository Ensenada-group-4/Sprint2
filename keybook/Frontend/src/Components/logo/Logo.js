import logo from "./logo.png";

export const Logo = ({ id, className, style }) => {
  return (
    <img src={logo} alt="Keybook logo" style={{ style }} id={id} className={className} />
  );
};