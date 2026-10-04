import { ArrowUpRight, BadgeCheck } from 'lucide-react';
import { siCisco, siSap, type SimpleIcon } from 'simple-icons';
import { portfolio } from '../data/portfolio';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

import { useDraggableScroll } from '../hooks/useDraggableScroll';

const certificationLogos: Record<'sap' | 'cisco', SimpleIcon> = {
  sap: siSap,
  cisco: siCisco,
};

export function Certifications() {
  const dragProps = useDraggableScroll<HTMLDivElement>();

  return (
    <section
      className="section section-wrap certifications-section"
      id="certifications"
      aria-labelledby="certifications-title"
    >
      <SectionHeading
        eyebrow={portfolio.sections.certifications.eyebrow}
        title={portfolio.sections.certifications.title}
        note={portfolio.sections.certifications.note}
        titleId="certifications-title"
      />

      <div className="cert-grid" {...dragProps}>
        {portfolio.certifications.map((cert, index) => {
          const logo = cert.brand === 'oracle' ? undefined : certificationLogos[cert.brand];
          return (
            <Reveal
              className={`cert-card cert-card--${cert.brand}`}
              key={cert.name}
              delay={index * 0.08}
            >
              <div className="cert-card__top">
                <div className="cert-card__issuer">
                  <span className={`cert-card__brand cert-card__brand--${cert.brand}`}>
                    {logo ? (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d={logo.path} fill="currentColor" />
                      </svg>
                    ) : (
                      <span>ORACLE</span>
                    )}
                  </span>
                  <span className="mono-label">{cert.issuer}</span>
                </div>
                {cert.credentialUrl ? (
                  <a
                    className="cert-card__link"
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Verify ${cert.name}`}
                    title="View credential"
                  >
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                ) : (
                  <BadgeCheck className="cert-card__earned" size={19} aria-label="Earned" />
                )}
              </div>
              <span className="cert-card__category">{cert.mark} / CERTIFICATION</span>
              <h3>{cert.name}</h3>
              <p>{cert.detail}</p>
              {cert.modules && (
                <ul className="cert-card__modules" aria-label="Completed CCNA courses">
                  {cert.modules.map((module) => (
                    <li key={module}>{module}</li>
                  ))}
                </ul>
              )}
              <span className="cert-card__date">{cert.date}</span>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
