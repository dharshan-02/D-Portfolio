type ProjectVisualProps = { visual: 'skycam' | 'knowledge' | 'evaluation' };

export function ProjectVisual({ visual }: ProjectVisualProps) {
  if (visual === 'skycam') {
    return (
      <div className="visual visual--skycam" aria-hidden="true">
        <div className="visual-landscape" />
        <span className="visual-label">SKYCAM</span>
        <span className="visual-caption">A portfolio for photography</span>
      </div>
    );
  }

  if (visual === 'knowledge') {
    return (
      <div className="visual visual--knowledge" aria-hidden="true">
        <div className="visual-window">
          <span className="visual-window__brand">KNOWLEDGE PORTAL</span>
          <span className="visual-window__title">
            Ideas worth
            <br />
            passing on.
          </span>
          <div className="visual-window__lines">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="visual visual--evaluation" aria-hidden="true">
      <div className="visual-dashboard">
        <span className="visual-window__brand">STUDENT EVALUATION HUB</span>
        <strong>
          Review <span>→</span> result
        </strong>
        <span className="visual-dashboard__caption">Automated project assessment</span>
        <div className="visual-dashboard__steps" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}
