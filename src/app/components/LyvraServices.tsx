const services = [
  {
    phase: "Phase 1",
    title: "Clear Strategy",
    body: "Secure your growth targets with a prioritized AI roadmap that identifies highest-value opportunities and minimizes risks, proven to transform vague ideas into concrete plans with clear ownership.",
    gets: ["Direction", "Early clarity", "Risk mitigation", "Strategic alignment"],
  },
  {
    phase: "Phase 2",
    title: "Tailored Design",
    body: "Gain deep insight into your processes through visualized workflows and precise AI use cases, ensuring data readiness for seamless implementations your team adopts effortlessly.",
    gets: ["Process visibility", "Data foundation", "Team readiness", "Implementation confidence"],
  },
  {
    phase: "Phase 3",
    title: "Controlled Rollout",
    body: "Deploy effective AI solutions step by step with full documentation, training, and feedback, enabling rapid adoption and immediate results entirely under your control.",
    gets: ["Early wins", "Rapid adoption", "Team momentum", "Proven ROI"],
  },
  {
    phase: "Phase 4",
    title: "Continuous Optimization",
    body: "Monitor and refine models and flows ongoing, build internal AI competence, and create a growing asset that evolves with your organization.",
    gets: ["Long-term ownership", "Continuous improvement", "Organizational resilience", "Sustainable advantage"],
  },
];

export function LyvraServices() {
  return (
    <section className="lyvra-s-service" id="service">
      <div className="lyvra-service-inner">
        <div className="lyvra-service-header">
          <div className="rv">
            <p className="lyvra-tag">Services Section</p>
            <h2 className="lyvra-service-hl">
              Four Phases to<br />Controlled Growth.
            </h2>
            <p style={{ fontSize: ".95rem", lineHeight: 1.75, color: "var(--g600)", fontWeight: 300, maxWidth: "52ch", marginTop: "1rem" }}>
              Successful AI implementation is <strong style={{ color: "var(--black)", fontWeight: 600 }}>90% management consulting</strong> and 10% technology enhancement. We guide you through four critical phases, each designed to de-risk your growth and deliver measurable outcomes.
            </p>
          </div>
          <a href="#contact" className="lyvra-service-link rv">Book a Call ↗</a>
        </div>

        <div className="lyvra-service-grid">
          {services.map((svc, i) => (
            <div className={`lyvra-svc-card rv${i > 0 ? ` d${i}` : ""}`} key={i}>
              <div className="lyvra-svc-meta">
                <span className="lyvra-svc-phase">{svc.phase}</span>
              </div>
              <div className="lyvra-svc-title">{svc.title}</div>
              <div className="lyvra-svc-body">{svc.body}</div>
              <div className="lyvra-svc-gets">
                <span className="lyvra-svc-get-label">You Get:</span>
                {svc.gets.map((g, j) => (
                  <span key={j} style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
                    <span className="lyvra-svc-get-item">{g}</span>
                    {j < svc.gets.length - 1 && <span className="lyvra-svc-get-sep">|</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="lyvra-service-cta rv">
          <a href="#contact" className="lyvra-btn-primary">
            Ready to Scale Sustainably? Explore the SureScale Framework
          </a>
        </div>
      </div>
    </section>
  );
}