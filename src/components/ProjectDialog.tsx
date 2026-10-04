import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUpRight, Github, X } from 'lucide-react';
import type { Project } from '../data/portfolio';
type ProjectDialogProps = { project: Project | null; onClose: () => void };

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  return (
    <Dialog.Root
      open={Boolean(project)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        {project && (
          <Dialog.Content
            className="project-dialog"
            aria-describedby={`project-description-${project.id}`}
          >
            <div className="project-dialog__top">
              <span className="mono-label">CASE FILE / {project.number}</span>
              <Dialog.Close asChild>
                <button className="icon-button" aria-label="Close project details">
                  <X size={18} />
                </button>
              </Dialog.Close>
            </div>
            <div className="project-dialog__body">
              <p className="eyebrow">{project.status}</p>
              <Dialog.Title className="project-dialog__title">{project.name}</Dialog.Title>
              <Dialog.Description
                id={`project-description-${project.id}`}
                className="project-dialog__subtitle"
              >
                {project.subtitle}
              </Dialog.Description>
              <div className="project-dialog__sections">
                <div>
                  <span className="mono-label">THE PROBLEM</span>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <span className="mono-label">THE APPROACH</span>
                  <p>{project.approach}</p>
                </div>
                <div>
                  <span className="mono-label">THE OUTCOME</span>
                  <p>{project.outcome}</p>
                </div>
              </div>
              <div className="project-dialog__bottom">
                <div className="tag-list">
                  {project.stack.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live site <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Github size={14} /> Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Content>
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
}
