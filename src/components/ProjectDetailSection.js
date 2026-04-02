import { useState } from 'react';

export default function ProjectDetailSection({
  title,
  eyebrow,
  description,
  children,
  collapsible = false,
  defaultExpanded = true,
  emphasis = false,
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const contentVisible = !collapsible || expanded;

  return (
    <section className={`detail-section ${emphasis ? 'detail-section--emphasis' : ''}`}>
      <div className="detail-section__header">
        <div>
          {eyebrow ? <p className="detail-section__eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        {collapsible ? (
          <button
            className="button button--ghost"
            type="button"
            onClick={() => setExpanded((currentValue) => !currentValue)}
          >
            {expanded ? '접기' : '펼치기'}
          </button>
        ) : null}
      </div>

      {contentVisible ? <div className="detail-section__content">{children}</div> : null}
    </section>
  );
}
