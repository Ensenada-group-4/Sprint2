//Reusable button component for the whole app

export const ButtonDefault = ({ content, type, className, onClick, style }) => {
  return (
    <button
      type={type}
      className={`btn btn-warning ${className}`}
      onClick={onClick}
      id="register-form-buttons"
      style={{ style }}>
      {content}
    </button>
  );
};
