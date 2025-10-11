import { useEffect, useState } from "react";

export default function Slideshow({ images = [], title = "Galerie" }) {
  const slides = images.filter(Boolean);

  const [index, setIndex] = useState(0);

  if (slides.length === 0) return null;

  const total = slides.length;
  const hasControls = total > 1;

  useEffect(() => {
    setIndex(0);
  }, [total]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    if (!hasControls) return;

    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hasControls, total]); 

  return (
    <section
      className="slideshow"
      aria-roledescription="carousel"
      aria-label={title}
    >
      <figure className="slideshow__frame">
        <img
          className="slideshow__img"
          src={slides[index]}
          alt={`${title} — image ${index + 1} sur ${total}`}
          draggable="false"
        />
      </figure>

      {hasControls && (
        <>
          <button
            type="button"
            className="slideshow__ctrl slideshow__ctrl--prev"
            aria-label="Image précédente"
            onClick={prev}
          >
            <img src="/prev.svg" alt="" aria-hidden="true" draggable="false" />
          </button>

          <button
            type="button"
            className="slideshow__ctrl slideshow__ctrl--next"
            aria-label="Image suivante"
            onClick={next}
          >
            <img src="/next.svg" alt="" aria-hidden="true" draggable="false" />
          </button>

          <div
            key={index}                 
            className="slideshow__count"
            aria-live="polite"
          >
            {index + 1}/{total}
          </div>
        </>
      )}
    </section>
  );
}


