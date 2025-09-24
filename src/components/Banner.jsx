export default function Banner({ title, imageSrc }) {
  return (
    <section className="banner" role="img" aria-label={title}>
      {imageSrc ? <img src={imageSrc} alt="" aria-hidden="true" /> : null}
      <h1 className="banner__title">{title}</h1>
      <span className="banner__overlay" aria-hidden="true" />
    </section>
  );
}
