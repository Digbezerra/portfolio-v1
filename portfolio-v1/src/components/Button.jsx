export function Button({ children, action, className = "btn-default" }) {
  return (
    <button className={className} onClick={() => action()}>
      {children}
    </button>
  );
}
