import { Featured } from "../Featured";

export function FeaturedList() {
  return (
    <>
      <section
        className="section-featured margin-bottom--regular padding-top--regular"
        id="featured"
      >
        <div className="section__title">
          <span className="title__number">03. </span>
          <h2>Principais Projetos</h2>
        </div>
        <Featured position={"right"} />
        <Featured position={"left"} />
        <Featured position={"right"} />
      </section>
    </>
  );
}
