export default function ScrollSpyNav({ items, activeId, onNavigate }) {
  return (
    <nav className="scroll-spy-nav" aria-label="섹션 빠른 이동">
      {items.map((item) => (
        <button
          key={item.id}
          className={`scroll-spy-nav__item ${activeId === item.id ? 'is-active' : ''}`}
          type="button"
          onClick={() => onNavigate(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
