'use client';

import { useSyncExternalStore } from 'react';
import { GITHUB_URL, LINKEDIN_URL, LOCATION, RESUME_URL, emailAddress } from '@/data/contact';

function emptySubscribe() {
  return () => {};
}

export default function Contact() {
  const email = useSyncExternalStore(emptySubscribe, emailAddress, () => '');

  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-title">Contact</h2>
      <p className="contact-place">{LOCATION}</p>
      {/* TODO(contact-form): mailto only until Trista decides whether to add a form. */}
      <ul className="contact-list">
        <li>
          {email ? (
            <a href={`mailto:${email}?subject=Opportunity`}>{email}</a>
          ) : (
            <span>Email</span>
          )}
        </li>
        <li>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
        </li>
        <li>
          <a href={RESUME_URL}>Resume</a>
        </li>
      </ul>
    </section>
  );
}
