import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import type { Theme } from '../hooks/useTheme';
import { useIntroReady } from '../hooks/useIntroReady';
import { ThemeToggle } from './ThemeToggle';

type SiteHeaderProps = {
  theme: Theme;
  onThemeToggle: () => void;
  activeSection: string;
};

export function SiteHeader({ theme, onThemeToggle, activeSection }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const introReady = useIntroReady();
  const reducedMotion = useReducedMotion();
  const headerVisible = introReady || reducedMotion;

  return (
    <motion.header
      className="site-header"
      initial={headerVisible ? false : { opacity: 0, y: -12 }}
      animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
      transition={{
        duration: reducedMotion ? 0 : 0.48,
        delay: reducedMotion ? 0 : 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <a
        className="brand-mark"
        href="#top"
        aria-label={`${portfolio.name}, back to top`}
        onClick={() => setMenuOpen(false)}
      >
        <span className="brand-mark__name">
          {portfolio.brandName}
        </span>
      </a>

      <nav
        id="mobile-navigation"
        className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
        aria-label="Main navigation"
      >
        {portfolio.navigation.map((item) => {
          const id = item.href.slice(1);
          return (
            <a
              key={item.href}
              className={`site-nav__link${activeSection === id ? ' is-active' : ''}`}
              href={item.href}
              aria-current={activeSection === id ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="site-header__actions">
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        <a className="header-cta" href="#contact">
          Let’s talk <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </motion.header>
  );
}
