const whatItems = [
  {
    phase: "What This Means",
    title: "Tested Methodology",
    body: "Every engagement strengthens the system. Faster results, less guesswork.",
  },
  {
    phase: "Repeatable",
    title: "Across Industries & Business Models",
    body: "Works across company sizes, industries, and business models — not a bespoke framework rebuilt from scratch each time.",
  },
  {
    phase: "The Outcome",
    title: "Structure Before Scale",
    body: "Management fundamentals installed first. AI layered on top of a solid foundation — not injected into broken processes.",
  },
];

export function LyvraMethodology() {
  return (
    <section className="lyvra-s-method" id="method">
      <div className="lyvra-method-inner">
        <div className="rv">
          <p className="lyvra-tag">Methodology Section</p>
          <h2 className="lyvra-method-hl">
            Management First,<br />Technology Second.
          </h2>
          <p className="lyvra-method-body">
            We eliminate chaos by installing management fundamentals first. You get the <strong>clear structure and seasoned certainty</strong> needed to scale aggressively.
          </p>
          <div className="rv d1">
            <p className="lyvra-dont-title">What We DON'T Do</p>
            <ul className="lyvra-dont-list">
              <li>Implement trendy AI for trendy's sake</li>
              <li>Hand you a tech stack and disappear</li>
              <li>Charge for 18-month projects with no early wins</li>
              <li>Treat AI as a software deployment — it's a change management challenge</li>
            </ul>
          </div>
          <div className="lyvra-method-separator rv d2">
            <p className="lyvra-method-separator-text">
              What separates us: <strong>We fix your business first. Then we enhance it with AI.</strong>
            </p>
          </div>
        </div>

        <div className="rv d1">
          <p className="lyvra-tag">A System, Not a One-Off Project</p>
          <h3 className="lyvra-method-sub-hl">The SureScale Framework</h3>
          <p className="lyvra-method-body">
            The SureScale Framework is repeatable across industries, company sizes, and business models. This isn't custom work. We bring a <strong>proven system</strong> that reduces risk and accelerates results.
          </p>
          <div className="lyvra-what-items">
            {whatItems.map((item, i) => (
              <div className="lyvra-what-item" key={i}>
                <div className="lyvra-wi-phase">{item.phase}</div>
                <div className="lyvra-wi-title">{item.title}</div>
                <p className="lyvra-wi-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
