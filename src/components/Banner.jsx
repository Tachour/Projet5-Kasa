export default function Banner({ title, imageSrc }) {
  return (
     <div className="banner" aria-label={title} role="img">
        {imageSrc ? <img src={imageSrc} alt="" aria-hidden="true" /> : null}
        <h1 className="banner__title">{title}</h1>
        <span className="banner__overlay" aria-hidden="true" />
      </div>
  );
}
