import "./Button.css";

export default function Button({ children, onClick, variant = "default" }) {
  return (
    <button onClick={onClick} className={`button button--${variant}`}>
      {children}
    </button>
  );
}
