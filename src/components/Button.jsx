export function Button({ children, action, className }) {
  return (
    <button className={`btn--default ${className}`} onClick={() => action()}>
      {children}
    </button>
  );
}
