import LivePortrait from './LivePortrait';
import ScopeTrace from './ScopeTrace';

export default function Hero() {
  return (
    <section className="hero-block section" id="top" aria-label="Introduction">
      <div className="hero-top">
        <div>
          <p className="kicker">Firmware · Robotics · Validation</p>
          <h1 className="display">Yi-Chi (Trista) Chen</h1>
          <p className="position">Firmware and validation engineer who ships things that move.</p>
          <p className="hero-sub">SJSU Software Engineering, May 2027 · Open to firmware, robotics, validation roles</p>
          <div className="hero-actions">
            <a className="btn-solid" href="/Yi-Chi_Trista_Chen_Resume.pdf">Resume</a>
            <a className="btn-outline" href="#contact">Contact</a>
          </div>
        </div>
        <LivePortrait />
      </div>
      <ScopeTrace />
      <ul className="glance" aria-label="At a glance">
        <li>GPA 3.7</li>
        <li>Grad May 2027</li>
        <li>Seeking: internships now / new grad after May 2027</li>
        <li>San Jose, CA</li>
      </ul>
      <p className="now-line">
        Now: EMC &amp; RF validation at{' '}
        <a href="https://www.element.com/" target="_blank" rel="noreferrer">Element Materials Technology</a>
        {' · '}
        Officer at{' '}
        <a href="https://sce.sjsu.edu/" target="_blank" rel="noreferrer">SJSU SCE</a>
      </p>
    </section>
  );
}
