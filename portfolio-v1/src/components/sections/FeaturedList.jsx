import { Featured } from "./Featured";

export function FeaturedList() {
  return (
    <>
      <section className="section-featured margin-bottom--regular">
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
