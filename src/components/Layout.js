import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { siteContent } from '../data/siteContent';
import ThemeToggle from './ThemeToggle';

const THEME_STORAGE_KEY = 'portfolio-theme';

const navigationItems = [
  { label: '홈', to: '/' },
  { label: '프로젝트', to: '/projects' },
  { label: '소개', to: '/about' },
];

function resolveInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  const mediaQueryResult =
    typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-color-scheme: dark)')
      : null;

  return mediaQueryResult?.matches ? 'dark' : 'light';
}

export default function Layout({ children }) {
  const [theme, setTheme] = useState(resolveInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="brand-mark" to="/">
            <span className="brand-mark__badge">YYK</span>
            <span>
              <strong>{siteContent.name}</strong>
              <small>web developer portfolio</small>
            </span>
          </Link>

          <nav className="site-nav" aria-label="메인 내비게이션">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  `site-nav__link ${isActive ? 'is-active' : ''}`
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="site-header__actions">
            <ThemeToggle
              theme={theme}
              onToggle={() =>
                setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
              }
            />
          </div>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>{siteContent.footerText}</p>
          <a href="https://github.com/YuYoungKwang" rel="noreferrer" target="_blank">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
