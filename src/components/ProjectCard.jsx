import { FolderIcon } from "./icons/FolderIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export function ProjectCard({ data }) {
  return (
    <>
      <div className="projects__item" data-aos="fade-up">
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
          {/* <LinkedinIcon /> */}
        </div>
        <div className="projects__content">
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </div>
        <ul className="stack__ul">
          {data["stack"].map((item) => {
            return (
              <li className="stack__li" key={data.id}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
