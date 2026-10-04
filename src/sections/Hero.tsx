import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { Button } from '../components/ui/Button';
import { useIntroReady } from '../hooks/useIntroReady';

export function Hero() {
  const reducedMotion = useReducedMotion();
  const introReady = useIntroReady();
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const activeRole = portfolio.hero.roles[roleIndex] ?? portfolio.hero.roles[0];

  useEffect(() => {
    if (!introReady) return;

    if (reducedMotion) {
      setTypedRole(activeRole);
      return;
    }

    if (!isDeleting && typedRole === activeRole) {
      const pause = window.setTimeout(() => setIsDeleting(true), 1000);
      return () => window.clearTimeout(pause);
    }

    if (isDeleting && typedRole.length === 0) {
      const pause = window.setTimeout(() => {
        setRoleIndex((index) => (index + 1) % portfolio.hero.roles.length);
        setIsDeleting(false);
      }, 240);
      return () => window.clearTimeout(pause);
    }

    const nextLength = typedRole.length + (isDeleting ? -1 : 1);
    const timer = window.setTimeout(
      () => setTypedRole(activeRole.slice(0, nextLength)),
      isDeleting ? 48 : 88,
    );
    return () => window.clearTimeout(timer);
  }, [activeRole, introReady, isDeleting, reducedMotion, typedRole]);

  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero__grid">
        <div className="hero__copy">
          <motion.p
            className="hero__intro"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: reducedMotion ? 0 : 0.45 }}
          >
            {portfolio.hero.greeting}
          </motion.p>
          <motion.h1
            className="hero__name"
            id="hero-title"
            initial={reducedMotion ? false : { opacity: 0, y: 22 }}
            animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            transition={{
              duration: reducedMotion ? 0 : 0.65,
              delay: reducedMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {portfolio.name}
          </motion.h1>
          <motion.p
            className="hero__role-line"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: reducedMotion ? 0 : 0.48, delay: reducedMotion ? 0 : 0.16 }}
          >
            {portfolio.hero.roleLead}{' '}
            <span className="hero__role-window" aria-hidden="true">
              <span className="hero__role-word">{typedRole}</span>
              <span className="hero__caret">|</span>
            </span>
            <span className="sr-only">Developer, Tester, Freelancer</span>
          </motion.p>
          <motion.p
            className="hero__statement"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: reducedMotion ? 0 : 0.52, delay: reducedMotion ? 0 : 0.23 }}
          >
            {portfolio.statement}
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: reducedMotion ? 0 : 0.48, delay: reducedMotion ? 0 : 0.32 }}
          >
            <Button href="#work">
              View projects <ArrowDownRight size={17} />
            </Button>
            <Button href={portfolio.resumePath} download variant="secondary">
              Résumé <Download size={16} />
            </Button>
          </motion.div>
          <motion.div
            className="hero__socials"
            aria-label="Social links"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: introReady ? 1 : 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : 0.46 }}
          >
            {portfolio.socialLinks.map((link) => {
              const Icon = link.label === 'GitHub' ? Github : Linkedin;
              return (
                <a
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
            <a href={`mailto:${portfolio.email}`} aria-label="Email Dharshan">
              <Mail size={19} />
            </a>
          </motion.div>
        </div>

        <motion.figure
          className="hero-portrait"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.97, y: 14 }}
          animate={introReady ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.97, y: 14 }}
          transition={{
            duration: reducedMotion ? 0 : 0.75,
            delay: reducedMotion ? 0 : 0.16,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src={portfolio.heroImage.src}
            alt={portfolio.heroImage.alt}
            width="1222"
            height="1287"
          />
        </motion.figure>
      </div>
    </section>
  );
}
