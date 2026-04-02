function resolveButtonClass(type, compact) {
  if (compact) {
    return 'action-link action-link--compact';
  }
  if (type === 'primary') {
    return 'action-link action-link--primary';
  }
  return 'action-link';
}

export default function LinkActions({ links, compact = false }) {
  return (
    <div className={`action-links ${compact ? 'action-links--compact' : ''}`}>
      {links.map((link) =>
        link.href ? (
          <a
            key={link.label}
            className={resolveButtonClass(link.type, compact)}
            href={link.href}
            rel="noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        ) : (
          <span
            key={link.label}
            className={`${resolveButtonClass(link.type, compact)} is-disabled`}
            aria-disabled="true"
          >
            {link.label} 준비 중
          </span>
        )
      )}
    </div>
  );
}
