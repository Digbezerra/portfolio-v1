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
        <h3 className="title--h3">Tecnologias que domino</h3>
        <ul className="stacklist__ul">
          {stack.map((item) => {
            return (
              <li className="stacklist__li" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
