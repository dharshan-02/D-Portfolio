import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="site-footer">
      <nav className="site-footer__rail site-footer__rail--left" aria-label="Social profiles">
        {portfolio.socialLinks.map((link) => {
          const Icon = link.label === 'GitHub' ? Github : Linkedin;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          );
        })}
        <span className="site-footer__stem" aria-hidden="true" />
      </nav>
      <a className="site-footer__rail site-footer__rail--right" href={`mailto:${portfolio.email}`}>
        <span>{portfolio.email}</span>
        <span className="site-footer__stem" aria-hidden="true" />
      </a>

      <div className="site-footer__panel section-wrap">
        <div className="site-footer__main">
          <div className="site-footer__identity">
            <a className="brand-mark" href="#top" aria-label={`${portfolio.name}, back to top`}>
              <span className="brand-mark__name">
                {portfolio.name}
                <span className="brand-mark__period">.</span>
              </span>
            </a>
            <p>{portfolio.footerStatement}</p>
          </div>
          <a className="back-top" href="#top">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
        <div className="site-footer__bottom">
          <span>
            © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
          </span>
          <div className="site-footer__inline-links">
            {portfolio.socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            ))}
            <a href={`mailto:${portfolio.email}`}>
              Email <Mail size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
