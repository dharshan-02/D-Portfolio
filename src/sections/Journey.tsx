import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, ChevronDown, GraduationCap, Terminal } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function Journey() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="section section-wrap journey-section"
      id="journey"
      aria-labelledby="journey-title"
    >
      <SectionHeading
        eyebrow={portfolio.sections.journey.eyebrow}
        title={portfolio.sections.journey.title}
        note={portfolio.sections.journey.note}
        titleId="journey-title"
      />
      <div className="timeline">
        {portfolio.journey.map((entry, index) => {
          const Icon = entry.kind === 'education' ? GraduationCap : Terminal;
          const nestedProjects = entry.projectIds
            ?.map((projectId) => portfolio.projects.find((project) => project.id === projectId))
            .filter((project) => project !== undefined);
          const hasProjects = Boolean(nestedProjects?.length);

          return (
            <Reveal
              className="timeline-item"
              key={`${entry.marker}-${entry.title}`}
              delay={index * 0.07}
            >
              <span className="timeline-item__rail" aria-hidden="true">
                <i />
              </span>
              <div className="timeline-item__date">{entry.date}</div>
              <div className="timeline-item__content">
                {hasProjects ? (
                  <button
                    className="timeline-item__trigger"
                    type="button"
                    aria-expanded={projectsOpen}
                    aria-controls={projectsOpen ? 'btech-project-branch' : undefined}
                    onClick={() => setProjectsOpen((open) => !open)}
                  >
                    <span className="timeline-item__meta">
                      <Icon size={15} />
                      <span>{entry.organization}</span>
                      <span className="timeline-item__number">{entry.marker}</span>
                    </span>
                    <span className="timeline-item__title">{entry.title}</span>
                    <span className="timeline-item__detail">{entry.detail}</span>
                    <span className="timeline-item__expand-hint">
                      <span>
                        {projectsOpen
                          ? 'Hide projects'
                          : `Explore ${nestedProjects?.length} projects`}
                      </span>
                      <ChevronDown
                        size={15}
                        className={projectsOpen ? 'is-open' : undefined}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                ) : (
                  <>
                    <div className="timeline-item__meta">
                      <Icon size={15} />
                      <span>{entry.organization}</span>
                      <span className="timeline-item__number">{entry.marker}</span>
                    </div>
                    <h3>{entry.title}</h3>
                    <p>{entry.detail}</p>
                  </>
                )}

                {hasProjects && (
                  <AnimatePresence initial={false}>
                    {projectsOpen && (
                      <motion.div
                        className="timeline-branch"
                        id="btech-project-branch"
                        aria-label="Projects built during the B.Tech period"
                        aria-hidden={!projectsOpen}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: reducedMotion ? 0 : 0.42,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {nestedProjects?.map((project, projectIndex) => (
                          <article className="timeline-branch__item" key={project.id}>
                            <span className="timeline-branch__node" aria-hidden="true" />
                            <div className="timeline-branch__content">
                              <div className="timeline-branch__meta">
                                <span>PROJECT / {String(projectIndex + 1).padStart(2, '0')}</span>
                                <span>{project.stack.slice(0, 3).join(' · ')}</span>
                              </div>
                              <h4>{project.name}</h4>
                              <p>{project.subtitle}</p>
                              <div className="timeline-branch__links">
                                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                  Live project <ArrowUpRight size={13} />
                                </a>
                                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                  Source code <ArrowDownRight size={13} />
                                </a>
                              </div>
                            </div>
                          </article>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
