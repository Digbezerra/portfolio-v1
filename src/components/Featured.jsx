function FeaturedContentLeft() {
  return (
    <>
      <div className="featured__container--left">
        <div className="featured__image">
          <img
            src="images/placeholder_600x400.png"
            alt="profile photo placeholder"
          />
        </div>
        <div className="featured__content">
          <p className="title__project">Projetos em destaque</p>
          <p className="subtitle__project">Projetos em destaque</p>
          <div className="featured__description--container--left">
            <p className="featured__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut amet,
              excepturi, vero atque quidem sapiente ab cumque deserunt provident
              beatae aperiam ad placeat suscipit laboriosam autem magni
              laudantium, temporibus enim!
            </p>
          </div>
        </div>
        <ul className="stack__ul--left">
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

function FeaturedContentRight() {
  return (
    <>
      <div className="featured__container">
        <div className="featured__content">
          <p className="title__project">Projetos em destaque</p>
          <p className="subtitle__project">Projetos em destaque</p>
          <div className="featured__description--container">
            <p className="featured__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut amet,
              excepturi, vero atque quidem sapiente ab cumque deserunt provident
              beatae aperiam ad placeat suscipit laboriosam autem magni
              laudantium, temporibus enim!
            </p>
          </div>
        </div>
        <div className="featured__image">
          <img
            src="images/placeholder_600x400.png"
            alt="profile photo placeholder"
          />
        </div>
        <ul className="stack__ul">
          <li className="stack__li">React</li>
          <li className="stack__li">Javascript</li>
          <li className="stack__li">html</li>
          <li className="stack__li">css</li>
          <li className="stack__li">GraphQL</li>
          <li className="stack__li">GraphQL</li>
          <li className="stack__li">GraphQL</li>
        </ul>
      </div>
    </>
  );
}

export function Featured({ position = "right" }) {
  return (
    <>
      {position === "right" ? (
        <FeaturedContentRight />
      ) : (
        <FeaturedContentLeft />
      )}
    </>
  );
}
