export function Logo({ imgName, altText }) {
  return (
    <>
      <a href="#">
        <img src={`images/${imgName}`} alt={altText} className="logo" />
      </a>
    </>
  );
}
