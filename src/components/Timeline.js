export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <article className="timeline__item" key={`${item.year}-${item.title}`}>
          <div className="timeline__rail">
            <span className="timeline__dot" />
            {index < items.length - 1 ? <span className="timeline__line" /> : null}
          </div>
          <div className="timeline__content">
            <p className="timeline__year">{item.year}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
