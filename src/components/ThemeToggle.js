export default function ThemeToggle({ theme, onToggle }) {
  const nextThemeLabel = theme === 'dark' ? '라이트 모드' : '다크 모드';

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={nextThemeLabel}
    >
      <span className="theme-toggle__thumb" />
      <span className="theme-toggle__label">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  );
}
