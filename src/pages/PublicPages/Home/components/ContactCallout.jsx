import React from 'react';
import { MailIcon, LinkedinIcon } from '../../../../components/common/Icons';
import { SITE_CONFIG } from '../../../../config';
import './ContactCallout.css';

export default function ContactCallout() {
  return (
    <section className="contact-callout-section" aria-labelledby="contact-callout-title">
      <div className="contact-callout-card">
        <div className="contact-callout-info">
          <span className="contact-callout-kicker">Get in Touch</span>
          <h2 id="contact-callout-title" className="contact-callout-title">
            Have a project in mind or looking for a developer?
          </h2>
          <p className="contact-callout-desc">
            Open to full-time junior developer roles, internships, and web development projects. Feel free to reach out anytime!
          </p>
        </div>

        <div className="contact-callout-actions">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="hero-btn hero-btn-primary"
          >
            <MailIcon size={16} />
            <span>Send an Email</span>
          </a>

          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn-secondary"
          >
            <LinkedinIcon size={16} />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
