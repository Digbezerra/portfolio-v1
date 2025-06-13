function FeaturedContentLeft({ data }) {
  return (
    <>
      <div className="featured__container--left">
        <div className="featured__image">
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            <img src={`images/${data.image}`} alt="project thumbnail" />
          </a>
        </div>
        <div className="featured__content">
          <p className="title__project">{data.sub_title}</p>
          <p className="subtitle__project">{data.name}</p>
          <div className="featured__description--container--left">
            <p className="featured__text">{data.description}</p>
          </div>
        </div>
        <ul className="stack__ul--left">
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

function FeaturedContentRight({ data }) {
  return (
    <>
      <div className="featured__container">
        <div className="featured__content">
          <p className="title__project">{data.sub_title}</p>
          <p className="subtitle__project">{data.name}</p>
          <div className="featured__description--container">
            <p className="featured__text">{data.description}</p>
          </div>
        </div>
        <div className="featured__image">
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            <img src={`images/${data.image}`} alt="project thumbnail" />
          </a>
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

export function Featured({ position = "right", data }) {
  return (
    <>
      {position === "right" ? (
        <FeaturedContentRight data={data} />
      ) : (
        <FeaturedContentLeft data={data} />
      )}
    </>
  );
}
