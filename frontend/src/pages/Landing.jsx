import { useState } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Icon = ({ children, size = 20, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

function Arrow() { return <Icon size={16}><path d="M5 12h14M12 5l7 7-7 7" /></Icon>; }

const jobs = [
  { initials: "N", name: "Northstar", role: "Product designer", stage: "Interview", color: "lavender", score: "94%" },
  { initials: "S", name: "Sonder", role: "UX researcher", stage: "Applied", color: "peach", score: "87%" },
  { initials: "V", name: "Verde Labs", role: "Design lead", stage: "Saved", color: "mint", score: "91%" },
];

function ProductPreview() {
  return (
    <div className="preview-wrap" aria-label="Preview of the Falvoxa job search dashboard">
      <div className="preview-glow" />
      <div className="preview-window">
        <div className="preview-top"><div className="preview-brand"><span className="mini-mark">f</span> falvoxa</div><div className="preview-date">MONDAY, OCTOBER 21 <span className="avatar">J</span></div></div>
        <div className="preview-body">
          <aside className="preview-side"><div className="side-active">▦ <span>Overview</span></div><div>◷ <span>My pipeline</span></div><div>✳ <span>AI matching</span></div><div>▤ <span>My resume</span></div><div className="side-bottom">⚙ <span>Settings</span></div></aside>
          <div className="preview-main">
            <div className="preview-greeting"><div><div className="eyebrow">YOUR CAREER, IN MOTION</div><h3>Good morning, Jamie <span>✳</span></h3><p>Small steps, big things. Here’s your week at a glance.</p></div><button className="preview-action">＋ <span>Add application</span></button></div>
            <div className="stat-row"><div className="stat-card"><span>Active applications</span><strong>12</strong><small>↗ 3 this week</small></div><div className="stat-card"><span>Interviews ahead</span><strong>04</strong><small className="stat-warm">One on Thursday</small></div><div className="stat-card stat-highlight"><span>Profile match avg.</span><strong>87<span>%</span></strong><small>↑ Looking sharp</small></div></div>
            <div className="table-card"><div className="table-heading"><strong>In your orbit</strong><span>See all <Arrow /></span></div>{jobs.map((job) => <div className="job-row" key={job.name}><div className={`company-icon ${job.color}`}>{job.initials}</div><div className="job-info"><strong>{job.role}</strong><span>{job.name}</span></div><span className={`stage stage-${job.stage.toLowerCase()}`}>{job.stage}</span><span className="match-score">{job.score}<small> match</small></span><span className="row-more">···</span></div>)}</div>
          </div>
        </div>
      </div>
      <div className="floating-note"><span className="note-spark">✳</span><div><strong>That’s a great fit.</strong><small>Your skills match 9 out of 10.</small></div><span className="note-check">✓</span></div>
    </div>
  );
}

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="falvoxa-site">
      <header className="site-nav">
        <Link className="site-logo" to="/" aria-label="Falvoxa home"><span className="logo-symbol">f</span> falvoxa<span className="logo-dot">.</span></Link>
        <button className="mobile-menu" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "☰"}</button>
        <nav className={menuOpen ? "site-links is-open" : "site-links"}>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a><a href="#features" onClick={() => setMenuOpen(false)}>Why Falvoxa</a><a href="#stories" onClick={() => setMenuOpen(false)}>Stories</a>
        </nav>
        <div className="nav-actions"><Link className="nav-login" to="/login">Log in</Link><Link className="nav-cta" to="/signup">Get started <Arrow /></Link></div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="kicker-star">✳</span> A calmer way to find your next thing</div>
            <h1>Your next chapter<br />looks <span>good on you.</span></h1>
            <p className="hero-description">The job search can feel like a full-time job. Falvoxa brings your applications, your story, and your next move into one thoughtful little corner.</p>
            <div className="hero-actions"><Link className="hero-button" to="/signup">Find your next move <Arrow /></Link><a className="text-link" href="#how-it-works">Take a peek <span>↓</span></a></div>
            <div className="social-proof"><div className="proof-avatars"><span>J</span><span>M</span><span>A</span><span>K</span></div><div><div className="proof-stars">★★★★★</div><p>Made for people in the middle of becoming.</p></div></div>
          </div>
          <ProductPreview />
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        </section>

        <section className="ticker" aria-label="Falvoxa benefits"><div><span>✳</span> LESS SPREADSHEET, MORE YOU <i>✦</i> FIND YOUR FIT <i>✦</i> KEEP YOUR MOMENTUM <i>✦</i> MAKE THE NEXT MOVE <i>✦</i> LESS SPREADSHEET, MORE YOU <i>✦</i> FIND YOUR FIT <i>✦</i> KEEP YOUR MOMENTUM <i>✦</i></div></section>

        <section className="intro-section" id="how-it-works"><div className="section-label">A LITTLE MORE HUMAN</div><div className="intro-grid"><h2>Because finding a job<br />shouldn’t <em>be</em> your job.</h2><p>All the tabs, deadlines, versions, and “did I ever hear back?” moments? Let’s make room for the part that matters: finding work that feels like you.</p></div><div className="values-row"><div><span className="value-num">01</span><strong>Bring it all together</strong><p>One home for your resume, opportunities, and every next step.</p></div><div><span className="value-num">02</span><strong>See where you shine</strong><p>Get a clearer picture of how your experience fits the role.</p></div><div><span className="value-num">03</span><strong>Keep your own pace</strong><p>Track progress without turning your search into a second job.</p></div></div></section>

        <section className="feature-section" id="features"><div className="feature-copy"><div className="section-label">A BETTER KIND OF MATCH</div><h2>Your experience has a way of <em>adding up.</em></h2><p>Paste a role, bring your resume, and get a thoughtful look at where your strengths meet the opportunity. No black box, just a useful place to start.</p><ul><li><span>✓</span> A match score that gives you context</li><li><span>✓</span> Skills you already bring to the table</li><li><span>✓</span> Ideas to make your experience shine</li></ul><Link className="feature-link" to="/signup">See how you fit <Arrow /></Link></div><div className="match-card"><div className="match-card-top"><span>YOUR ROLE READOUT</span><span className="live-dot">● YOUR NEXT POSSIBILITY</span></div><div className="match-card-title"><div className="role-symbol">✳</div><div><strong>Brand Designer</strong><small>Brightside Studio · Remote</small></div><span className="bookmark">♡</span></div><div className="match-score-block"><div className="score-circle"><div><strong>92</strong><small>FIT SCORE</small></div></div><div className="score-copy"><strong>There’s something here.</strong><p>Your thoughtful, cross-functional approach is right in line with what this team needs.</p></div></div><div className="skill-heading">WHERE YOU CONNECT <span>4 strong matches</span></div><div className="skill-pills"><span>Visual storytelling</span><span>Design systems</span><span>Art direction</span><span>✦ +2 more</span></div><div className="match-card-footer"><span>Made to help you decide, not decide for you.</span><span>✳ FALVOXA INSIGHT</span></div></div></section>

        <section className="quote-section" id="stories"><div className="quote-mark">“</div><blockquote>It’s the first time my job search has felt like <em>something I can actually manage.</em> I know where things stand, and I finally have space to think about what I really want.</blockquote><div className="quote-person"><span className="quote-avatar">M</span><div><strong>Morgan L.</strong><small>Designer, currently finding their next thing</small></div></div><div className="quote-doodle">✳</div></section>

        <section className="closing-section"><div className="closing-flower">✳</div><div className="section-label">THE NEXT CHAPTER IS YOURS</div><h2>Let’s make room<br />for <em>what’s next.</em></h2><p>One small step is still a step forward.</p><Link className="closing-button" to="/signup">Start your free workspace <Arrow /></Link><small>No credit card. No pressure. Just a fresh start.</small><div className="closing-decoration deco-a">✳</div><div className="closing-decoration deco-b">✦</div></section>
      </main>

      <footer className="site-footer"><Link className="site-logo" to="/"><span className="logo-symbol">f</span> falvoxa<span className="logo-dot">.</span></Link><p>A little more you in your job search.</p><div className="footer-right"><span>Made for the in-between.</span><span>© 2026 Falvoxa</span></div></footer>
    </div>
  );
}
