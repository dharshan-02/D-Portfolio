import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${portfolio.email}`;
    }
  }

  return (
    <section
      className="section section-wrap contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <SectionHeading
        eyebrow={portfolio.sections.contact.eyebrow}
        title={portfolio.sections.contact.title}
        note={portfolio.sections.contact.note}
        titleId="contact-title"
      />
      <div className="contact-stage">
        <Reveal className="contact-invite">
          <span className="contact-invite__kicker">
            <span className="availability-dot" aria-hidden="true" />
            {portfolio.availabilityLabel}
          </span>
          <div className="contact-invite__content">
            <div>
              <span className="contact-invite__eyebrow">
                Great ideas don't belong in short messages
              </span>
              <h3>{portfolio.sections.contact.invitation}</h3>
            </div>
            <ArrowDownRight className="contact-invite__arrow" size={34} aria-hidden="true" />
          </div>
          <p>{portfolio.contactIntro.detail}</p>

          <div className="contact-email-panel">
            <div className="contact-email-panel__address">
              <span>{portfolio.sections.contact.emailLabel}</span>
              <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
            </div>
            <div className="contact-email-panel__actions">
              <button
                className="contact-email-panel__copy"
                type="button"
                onClick={copyEmail}
                aria-label={copied ? 'Email address copied' : 'Copy email address'}
              >
                {copied ? <Check size={17} /> : <Copy size={16} />}
                <span>{copied ? 'Copied' : 'Copy email'}</span>
              </button>
              <a className="contact-email-panel__send" href={`mailto:${portfolio.email}`}>
                <Mail size={16} aria-hidden="true" /> Send an email
              </a>
            </div>
          </div>

          <div className="contact-socials">
            <span className="contact-socials__label">
              {portfolio.sections.contact.socialsLabel}
            </span>
            <div className="contact-socials__links">
              {portfolio.socialLinks.map((link) => {
                const Icon = link.label === 'GitHub' ? Github : Linkedin;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Dharshan on ${link.label}`}
                  >
                    <Icon size={19} aria-hidden="true" />
                    <span>{link.label}</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
