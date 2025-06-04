export function Logo({ imgName, altText }) {
  return (
    <>
      <img src={`images/${imgName}`} alt={altText} className="logo" />
    </>
  );
}
