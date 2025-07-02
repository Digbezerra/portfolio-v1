import { FolderIcon } from "./icons/FolderIcon";
import { GithubIcon } from "./icons/GithubIcon";

export function ProjectCard({ data }) {
  return (
    <>
      <div className="projects__item">
        <div className="projects__header">
          {data.course_url && (
            <>
              <a
                href={data.course_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FolderIcon />
              </a>
            </>
          )}
          {data.github_url && (
            <>
              <a
                href={data.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </>
          )}
        </div>
        <div className="projects__content">
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </div>
        <ul className="stack__ul">
          {data["stack"].map((item) => {
            return (
              <li className="stack__li" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
