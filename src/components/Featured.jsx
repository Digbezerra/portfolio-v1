import { useState, useEffect } from "react";

function FeaturedContentLeft({ data }) {
  return (
    <>
      <div
        className="featured__container--left"
        data-aos="fade-up"
        data-aos-duration="500"
      >
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

function FeaturedContentRight({ data }) {
  return (
    <>
      <div
        className="featured__container"
        data-aos="fade-up"
        data-aos-duration="500"
      >
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

function FeaturedMobile({ data }) {
  return (
    <div
      className="featured__mobile"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div>
        <img src={`images/${data.image}`} alt="project thumbnail" />
      </div>
      <div className="featured__mobile--content">
        <p className="title__project">{data.sub_title}</p>
        <p className="subtitle__project">{data.name}</p>
        <p className="featured__mobile--text">{data.description}</p>
        <a
          className="btn--default"
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver projeto
        </a>
      </div>
    </div>
  );
}

export function Featured({ position = "right", data }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <FeaturedMobile data={data} key={data.id} />;
  } else if (!isMobile && position === "right") {
    return <FeaturedContentRight data={data} key={data.id} />;
  } else if (!isMobile && position !== "right") {
    return <FeaturedContentLeft data={data} key={data.id} />;
  }
}
