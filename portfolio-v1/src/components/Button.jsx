export function Button({
  children,
  action = () => alert("clique"),
  className,
}) {
  return (
    <button className={`btn--default ${className}`} onClick={() => action()}>
      {children}
    </button>
  );
}
