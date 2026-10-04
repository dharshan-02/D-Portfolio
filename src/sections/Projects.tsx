import { lazy, Suspense, useState } from 'react';
import { ArrowRight, ExternalLink, Github, LockKeyhole } from 'lucide-react';
import type { Project } from '../data/portfolio';
import { portfolio } from '../data/portfolio';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

import { useDraggableScroll } from '../hooks/useDraggableScroll';

const ProjectDialog = lazy(() =>
  import('../components/ProjectDialog').then((module) => ({ default: module.ProjectDialog })),
);

function ProjectLink({ project, type }: { project: Project; type: 'live' | 'github' }) {
  const isLive = type === 'live';
  const href = isLive ? project.liveUrl : project.githubUrl;
  const label = isLive ? 'Live demo' : 'GitHub repository';
  const Icon = isLive ? ExternalLink : Github;

  if (!href) {
    return (
      <button
        className="project-card__link project-card__link--unavailable"
        type="button"
        disabled
        aria-label={`${label} link not added yet`}
        title={`${label} link not added yet`}
      >
        {isLive ? <LockKeyhole size={20} /> : <Icon size={20} />}
      </button>
    );
  }

  return (
    <a
      className="project-card__link"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.name} ${label}`}
      title={label}
    >
      <Icon size={20} />
    </a>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const dragProps = useDraggableScroll<HTMLDivElement>();

  return (
    <section
      className="section section-wrap projects-section"
      id="work"
      aria-labelledby="work-title"
    >
      <SectionHeading
        eyebrow={portfolio.sections.projects.eyebrow}
        title={portfolio.sections.projects.title}
        note={portfolio.sections.projects.note}
        titleId="work-title"
      />
      <div className="projects-grid" {...dragProps}>
        {portfolio.projects.map((project, index) => (
          <Reveal className="project-card-reveal" key={project.id} delay={index * 0.08}>
            <article className="project-card">
              <div className="project-card__content">
                <div className="project-card__head">
                  <div className="project-card__heading">
                    <span className="project-card__index">PROJECT {project.number}</span>
                    <h3>
                      <button
                        className="project-card__title"
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        aria-label={`Read ${project.name} case study`}
                      >
                        {project.name}
                      </button>
                    </h3>
                    <p className="project-card__subtitle">{project.subtitle}</p>
                  </div>
                  <div className="project-card__links" aria-label={`${project.name} links`}>
                    <ProjectLink project={project} type="live" />
                    <ProjectLink project={project} type="github" />
                  </div>
                </div>

                <p className="project-card__description">
                  <span>Approach</span>
                  {project.approach}
                </p>

                <p className="project-card__outcome">
                  <span>Outcome</span>
                  {project.outcome}
                </p>

                <div className="project-card__footer">
                  <div className="tag-list" aria-label={`${project.name} technologies`}>
                    {project.stack.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    className="project-card__details"
                    type="button"
                    onClick={() => setSelectedProject(project)}
                  >
                    Read case study <ArrowRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="scroll-hint" aria-hidden="true">
        <span>← Swipe to explore →</span>
      </div>
      {selectedProject && (
        <Suspense
          fallback={
            <span className="sr-only" role="status">
              Loading project details…
            </span>
          }
        >
          <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
        </Suspense>
      )}
    </section>
  );
}
