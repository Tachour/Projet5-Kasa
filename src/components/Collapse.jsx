export default function Collapse({ title, children, defaultOpen = false }) {
  return (
    <details className="collapse" open={defaultOpen}>
      <summary className="collapse__header">
        <span className="collapse__title">{title}</span>
        <svg className="collapse__chevron" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </summary>

      <div className="collapse__content">
        <div className="collapse__inner">{children}</div>
      </div>
    </details>
  );
}
