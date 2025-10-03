import { useEffect, useMemo, useState, useCallback } from "react";

export default function Slideshow({ images = [], title = "Galerie" }) {
  const slides = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  // Si pas d'images -> rien à afficher
  if (!slides.length) return null;

  const hasControls = slides.length > 1;

  // Remet l'index à 0 si la liste d'images change
  useEffect(() => {
    setIndex(0);
  }, [slides]);

  // Assure que l'index reste valide si la longueur change (défensif)
  useEffect(() => {
    if (index >= slides.length) {
      setIndex(0);
    }
  }, [index, slides.length]);

  const go = useCallback(
    (step) => {
      setIndex((prev) => (prev + step + slides.length) % slides.length);
    },
    [slides.length]
  );

  const goPrev = useCallback(() => go(-1), [go]);
  const goNext = useCallback(() => go(+1), [go]);

  // Navigation clavier ← →
  useEffect(() => {
    if (!hasControls) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hasControls, goPrev, goNext]);

  return (
    <section
      className="slideshow"
      aria-roledescription="carousel"
      aria-label={title}
    >
      <figure className="slideshow__frame">
        <img
          key={slides[index]} // force le refresh de l'img (utile si animations)
          src={slides[index]}
          alt={`${title} — image ${index + 1} sur ${slides.length}`}
          className="slideshow__img"
          draggable="false"
        />
      </figure>

      {hasControls && (
        <>
          <button
            type="button"
            className="slideshow__ctrl slideshow__ctrl--prev"
            aria-label="Image précédente"
            onClick={goPrev}
          >
            <img src="/prev.svg" alt="" aria-hidden="true" draggable="false" />
          </button>

          <button
            type="button"
            className="slideshow__ctrl slideshow__ctrl--next"
            aria-label="Image suivante"
            onClick={goNext}
          >
            <img src="/next.svg" alt="" aria-hidden="true" draggable="false" />
          </button>

          <div className="slideshow__count" aria-live="polite">
            {index + 1}/{slides.length}
          </div>
        </>
      )}
    </section>
  );
}
