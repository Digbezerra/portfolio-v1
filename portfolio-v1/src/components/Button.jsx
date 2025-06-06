export function Button({
  children,
  action = () => alert("clique"),
  className = "btn--default",
}) {
  return (
    <button className={className} onClick={() => action()}>
      {children}
    </button>
  );
}
