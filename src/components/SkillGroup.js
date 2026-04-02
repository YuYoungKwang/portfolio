export default function SkillGroup({ title, items }) {
  return (
    <article className="skill-group">
      <div className="skill-group__top">
        <h3>{title}</h3>
        <span>{items.length}</span>
      </div>
      <div className="tag-row">
        {items.map((item) => (
          <span className="tag-chip tag-chip--soft" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
