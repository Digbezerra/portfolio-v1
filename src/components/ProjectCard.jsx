import { FolderIcon } from "./icons/FolderIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export function ProjectCard() {
  return (
    <>
      <div className="projects__item">
        <div className="projects__header">
          <FolderIcon />
          <GithubIcon />
          <LinkedinIcon />
        </div>
        <div className="projects__content">
          <h3>Curso X</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            modi at molestiae illo
          </p>
        </div>
        <ul className="stack__ul">
          <li className="stack__li">React</li>
          <li className="stack__li">Javascript</li>
          <li className="stack__li">html</li>
          <li className="stack__li">css</li>
          <li className="stack__li">GraphQL</li>
        </ul>
      </div>
    </>
  );
}
