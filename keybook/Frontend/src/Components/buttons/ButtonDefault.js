//Reusable button component for the whole app

export const ButtonDefault = ({ content, type, className, onClick, style }) => {
  return (
    <button
      type={type}
      className={`btn btn-warning register-form-buttons ${className}`}
      onClick={onClick}      
      style={{ style }}>
      {content}
    </button>
  );
};
