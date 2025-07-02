import { useState } from "react";

//Estes dados representam as experiências relevantes que você teve, insira as suas informações
//DESAFIO DE MELHORIAS: utilize alguma ferramenta de web server ou utilize a estrutura da sua ferramenta de build, e torne estes dados dinâmicos e escaláveis

/*  
id: number (sequencial, ou randomico),
name: string (nome da empresa, ou sigla),
full_name: string (nome completo da empresa),
role: string (seu cargo)
begin_date: string (utilize o formato: "Jan. 2024", "sigla do mês. ano"),
end_date: string (utilize o formato: "Jan. 2024", "sigla do mês. ano"),
description: array (cada posição do array é um parágrafo, facilita na hora de montar a lista de atividades["Fiz tal coisa", "era responsável por tal coisa"]),
*/

const jobs = [
  {
    id: 1,
    name: "ABC",
    full_name: "Aaaaa Bbbbb Ccccc",
    role: "Meu cargo",
    begin_date: "Out. 1900",
    end_date: "Jan. 1901",
    description: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt abd.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt ab.e",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt ab.de",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt abrf.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt abhgght.",
    ],
  },
  {
    id: 2,
    name: "DEF",
    full_name: "Ddddd Eeeeee Ffffff",
    role: "Meu cargo",
    begin_date: "Out. 1900",
    end_date: "Jan. 1901",
    description: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt abhyhynb.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt abnyret.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt abreynrtn.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt abnrgnr.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt abrnhnrn.",
    ],
  },
  {
    id: 3,
    name: "ABC",
    full_name: "Aaaaa Bbbbb Ccccc",
    role: "Meu cargo",
    begin_date: "Out. 1900",
    end_date: "Jan. 1901",
    description: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt abfaafserfa.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt abafdsf.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt abfasdfa.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt abdfasdf.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt abasdfasdf.",
    ],
  },
  {
    id: 4,
    name: "DEF",
    full_name: "Ddddd Eeeeee Ffffff",
    role: "Meu cargo",
    begin_date: "Out. 1900",
    end_date: "Jan. 1901",
    description: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt abyjutym.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt abmymjm.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt ab.rn",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptaturnm cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt abrnrgn.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatrgnrnum cumque eos totam laudantium et beatae, eligendi nesciunt, necessitatibus voluptatibus, quam similique debitis fugit expedita quia non. Fugiat culpa deserunt ab.",
    ],
  },
];

export function Jobs() {
  const [idSelected, setIdSelected] = useState(jobs[0].id);

  const handleSelectedItem = (id) => {
    setIdSelected(id);
  };

  return (
    <>
      <section
        className="section-jobs margin-bottom--regular padding-top--regular"
        id="jobs"
      >
        <div className="section__title">
          <span className="title__number">02. </span>
          <h2>Experiências relevantes</h2>
        </div>
        <div className="section-jobs__content">
          <ul className="job__menu">
            {jobs.map((item) => {
              const isId = item.id === idSelected;
              return (
                <li
                  className={`job__menu--item ${
                    isId ? "job__menu--item--active" : ""
                  }`}
                  onClick={() => handleSelectedItem(item.id)}
                  key={item.id}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
          <div>
            {jobs.map((item) => {
              const isId = item.id === idSelected;
              if (isId) {
                return (
                  <div className="job__description" key={item.id}>
                    <div>
                      <p className="title__job">{item.role}</p>
                      <p className="job__period">
                        {item.begin_date} / {item.end_date}
                      </p>
                    </div>
                    <p className="job__company">{item.full_name}</p>
                    <ul className="job__ul">
                      {item.description.map((item) => {
                        return (
                          <li className="job__li job__li--tasks" key={item}>
                            <p>{item}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}
