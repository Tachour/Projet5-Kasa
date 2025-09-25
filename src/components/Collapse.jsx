import { useState, useId } from "react";

export default function Collapse({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <section className={`collapse ${open ? "is-open" : ""}`}>
      
        <button
            className="collapse__header"
            aria-expanded={open}
            aria-controls={id}
            onClick={() => setOpen(o => !o)}
>
            <span className="collapse__title">{title}</span>

            {/* Chevron SVG blanc, arrondi, même look que la maquette */}
            <svg
  className="collapse__chevron"
  width="18"
  height="18"
  viewBox="0 0 24 24"
  fill="none"
  aria-hidden="true"
>
  <path d="M6 15L12 9L18 15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

        </button>


      <div id={id} className="collapse__content" hidden={!open}>
        <div className="collapse__inner">{children}</div>
      </div>
    </section>
  );
}
