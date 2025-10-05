import { useState, useId, useRef, useEffect } from "react";

export default function Collapse({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  const wrapperRef = useRef(null); 
  const innerRef = useRef(null);   

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.style.overflow = "hidden";
    wrapper.style.willChange = "height, opacity";

    if (defaultOpen) {
      wrapper.style.height = "auto";
      wrapper.style.opacity = "1";
    } else {
      wrapper.style.height = "0px";
      wrapper.style.opacity = "0";
    }
  }, [defaultOpen]);

  // Joue l’animation à chaque changement de `open`
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    const DURATION = 300; 
    const EASING = "ease-in-out";

    if (open) {
      const startHeight = wrapper.getBoundingClientRect().height;
      const targetHeight = inner.getBoundingClientRect().height;

      wrapper.style.height = `${startHeight}px`;
      wrapper.style.opacity = "0.7";

      wrapper.offsetHeight;

      wrapper.style.transition = `height ${DURATION}ms ${EASING}, opacity ${DURATION}ms ${EASING}`;
      wrapper.style.height = `${targetHeight}px`;
      wrapper.style.opacity = "1";

      const onEnd = (e) => {
        if (e.propertyName !== "height") return;
        wrapper.style.transition = "";
        wrapper.style.height = "auto"; 
        wrapper.removeEventListener("transitionend", onEnd);
      };
      wrapper.addEventListener("transitionend", onEnd);
    } else {
      const startHeight = wrapper.getBoundingClientRect().height;

      wrapper.style.height = `${startHeight}px`;
      wrapper.style.opacity = "1";

      wrapper.offsetHeight;

      wrapper.style.transition = `height ${DURATION}ms ${EASING}, opacity ${DURATION}ms ${EASING}`;
      wrapper.style.height = "0px";
      wrapper.style.opacity = "0";
    }
  }, [open]);

  return (
    <section className={`collapse ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="collapse__header"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(o => !o)}
      >
        <span className="collapse__title">{title}</span>

        <svg
          className="collapse__chevron"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 15L12 9L18 15"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>


      <div
        id={id}
        className="collapse__content"
        ref={wrapperRef}
        role="region"
        aria-hidden={!open}
      >
        <div className="collapse__inner" ref={innerRef}>
          {children}
        </div>
      </div>
    </section>
  );
}
