export function StackList() {
  const stack = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "PWA Studio",
    "Adobe Commerce",
    "GraphQL",
    "Sass",
    "Git",
    "Cypress",
    "Jest",
  ];
  return (
    <>
      <div className="stacklist">
        <h3 className="title--h3">Tecnologias que utilizei</h3>
        <ul className="stacklist__ul">
          {stack.map((item) => {
            <li className="stacklist__li">{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
