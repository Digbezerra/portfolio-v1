import { StackList } from "../StackList";

export function About() {
  return (
    <>
      <section
        className="section-about margin-bottom--regular padding-top--regular"
        id="about"
      >
        <div className="section-about__container">
          <div className="section__title">
            <span className="title__number">01. </span>
            <h2>Sobre mim</h2>
          </div>
          <div className="section-about__content">
            <div>
              <p className="paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi, ea iure repudiandae impedit sit facere maxime id
                exercitationem voluptatibus magnam tenetur perspiciatis
                expedita, perferendis tempora voluptatem dolor repellat,
                inventore eveniet.
              </p>
              <p className="paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Distinctio laudantium amet, quidem, animi fugit rem quisquam est
                veniam ex ea optio consequuntur in facilis consequatur
                aspernatur error consectetur nam commodi.
              </p>
            </div>

            <img
              className="profile-image"
              src="images/placeholder_600x400.png" //imagem 300x300 é o ideal
              alt="profile photo placeholder"
            />
          </div>
        </div>
        <StackList />
      </section>
    </>
  );
}
