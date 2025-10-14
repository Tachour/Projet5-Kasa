import { useState } from "react";

export default function Collapse({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className={`collapse ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="collapse__header"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span className="collapse__title">{title}</span>
        <svg
          className="collapse__chevron"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>

      <div className="collapse__content">
        <div className="collapse__inner">
          {children}
        </div>
      </div>
    </section>
  );
}
