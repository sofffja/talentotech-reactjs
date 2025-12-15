import "./Button.css";

export default function Button({
  children,
  onClick,
  variant = "default",
  disabled = false,
  type = "button",
}) {
  return (
    <button
      onClick={onClick}
      className={`button button--${variant}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
