import type { CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { faAws, faJava } from '@fortawesome/free-brands-svg-icons';
import {
  siC,
  siCplusplus,
  siDocker,
  siExpress,
  siGithub,
  siGooglecloud,
  siJavascript,
  siKubernetes,
  siLinux,
  siMongodb,
  siMysql,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPython,
  siReact,
  siRedis,
  siSap,
  siSelenium,
  siSpringboot,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons';
import { portfolio } from '../data/portfolio';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

const logos: Record<string, SimpleIcon> = {
  c: siC,
  cplusplus: siCplusplus,
  python: siPython,
  javascript: siJavascript,
  typescript: siTypescript,
  react: siReact,
  nodedotjs: siNodedotjs,
  express: siExpress,
  springboot: siSpringboot,
  mongodb: siMongodb,
  mysql: siMysql,
  postgresql: siPostgresql,
  redis: siRedis,
  sap: siSap,
  googlecloud: siGooglecloud,
  docker: siDocker,
  kubernetes: siKubernetes,
  linux: siLinux,
  postman: siPostman,
  github: siGithub,
  selenium: siSelenium,
};

const brandColors: Record<string, string> = {
  c: '#A8B9CC',
  cplusplus: '#00599C',
  python: '#3776AB',
  java: '#ED8B00',
  javascript: '#F0DB4F',
  typescript: '#3178C6',
  react: '#61DAFB',
  nodedotjs: '#5FA04E',
  express: '#B8C2D0',
  springboot: '#6DB33F',
  mongodb: '#47A248',
  mysql: '#4479A1',
  postgresql: '#4169E1',
  redis: '#FF4438',
  sap: '#0FA6E8',
  aws: '#FF9900',
  googlecloud: '#4285F4',
  docker: '#2496ED',
  kubernetes: '#326CE5',
  linux: '#FCC624',
  postman: '#FF6C37',
  github: 'var(--text-strong)',
  selenium: '#43B02A',
};

function SkillLogo({ icon, mark }: { icon: string; mark: string }) {
  const logo = logos[icon];
  if (logo) {
    return (
      <svg className="skill-card__logo" viewBox="0 0 24 24" aria-hidden="true">
        <path d={logo.path} fill="currentColor" />
      </svg>
    );
  }

  if (icon === 'java' || icon === 'aws') {
    const fontAwesomeLogo = icon === 'java' ? faJava : faAws;
    const [width, height, , , path] = fontAwesomeLogo.icon;
    return (
      <svg className="skill-card__logo" viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
        {Array.isArray(path) ? (
          path.map((shape, index) => (
            <path d={shape} fill="currentColor" key={`${icon}-${index}`} />
          ))
        ) : (
          <path d={path} fill="currentColor" />
        )}
      </svg>
    );
  }

  return <span className="skill-card__wordmark">{mark}</span>;
}

export function Skills() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="section section-wrap skills-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <SectionHeading
        eyebrow={portfolio.sections.skills.eyebrow}
        title={portfolio.sections.skills.title}
        note={portfolio.sections.skills.note}
        titleId="skills-title"
      />
      <div className="skills-groups">
        {portfolio.skills.map((group, groupIndex) => (
          <Reveal className="skills-group" key={group.id} delay={groupIndex * 0.08}>
            <div className="skills-group__heading">
              <h3 className="skills-group__title">{group.title}</h3>
            </div>
            <motion.ul
              className="skills-grid"
              aria-label={group.title}
              initial={reducedMotion ? false : 'hidden'}
              whileInView={reducedMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.18 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.045 } },
              }}
            >
              {group.items.map((item) => (
                <motion.li
                  className="skill-item"
                  key={item.name}
                  style={
                    { '--skill-brand': brandColors[item.icon] ?? 'var(--accent)' } as CSSProperties
                  }
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={reducedMotion ? undefined : { y: -4, scale: 1.015 }}
                >
                  <span className="skill-item__icon">
                    <SkillLogo icon={item.icon} mark={item.mark} />
                  </span>
                  <span className="skill-item__name">{item.name}</span>
                </motion.li>
              ))}
            </motion.ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
