const stats = [
  {
    n: "3×",
    body: (
      <>
        Companies that scale without operational discipline{" "}
        <strong>burn through 3× more runway.</strong> Aggressive growth without
        structure collapses. You run out of cash. Your team burns out. Execution
        suffers.
      </>
    ),
  },
  {
    n: "90%",
    body: (
      <>
        <strong>90% of AI projects fail</strong> due to poor change management,
        not technology. The tools work fine. The problem is human. People resist
        change. Processes aren't mapped. Teams aren't trained. Without
        management discipline first, technology fails.
      </>
    ),
  },
  {
    n: "20–30%",
    body: (
      <>
        Lack of clear processes costs SMEs an average of{" "}
        <strong>20–30% in lost productivity.</strong> When work is ad hoc,
        nothing scales. People repeat work. Bottlenecks multiply. Growth
        accelerates chaos faster than revenue.
      </>
    ),
  },
  {
    n: "90 days",
    body: (
      <>
        AI implementation ROI is fastest when grounded in existing company
        strategy. Clear success metrics, aligned stakeholders, high-ROI use
        cases prioritized.{" "}
        <strong>Result: payback in 90 days or less.</strong>
      </>
    ),
  },
];

export function LyvraStatistics() {
  return (
    <section className="lyvra-s-stats" id="stats">
      <div className="lyvra-stats-inner">
        <div className="lyvra-stats-header rv">
          <p className="lyvra-tag">Statistics</p>
          <h2 className="lyvra-stats-hl">
            Why Discipline Matters <span>More Than Technology</span>
          </h2>
        </div>
        <div className="lyvra-stats-grid">
          {stats.map((s, i) => (
            <div className={`lyvra-stat-block rv${i > 0 ? ` d${i}` : ""}`} key={i}>
              <div className="lyvra-sb-n">{s.n}</div>
              <p className="lyvra-sb-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
