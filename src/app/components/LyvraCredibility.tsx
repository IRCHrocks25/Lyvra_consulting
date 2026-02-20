import { useEffect, useRef, useState } from "react";

function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px 80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

const revealStyle = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(2.2rem)",
  transition: `opacity 0.85s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.85s cubic-bezier(.16,1,.3,1) ${delay}s`,
});

export function LyvraCredibility() {
  const left = useReveal();
  const right = useReveal();

  return (
    <section className="lyvra-s-cred" id="cred">
      <div className="lyvra-cred-inner">

        {/* ── Left column ── */}
        <div ref={left.ref} style={revealStyle(left.visible, 0)}>
          <p className="lyvra-tag">Credibility Section</p>
          <h2 className="lyvra-cred-hl">
            Structured Expertise. Applied Across Fortune 500 and Growing SMEs.
          </h2>
          <blockquote className="lyvra-cred-quote">
            "My track record is built on mitigating risk so my clients don't
            have to. I thrive in chaos — turning the commotion of the AI
            revolution into controlled advantage."
          </blockquote>
          <p className="lyvra-cred-attr">— Peter Lövgren</p>
          <p
            style={{
              fontSize: ".88rem",
              lineHeight: 1.75,
              color: "var(--g600)",
              fontWeight: 300,
              marginBottom: "2.5rem",
            }}
          >
            Peter spent 20+ years in corporate technology leadership.
          </p>
          <div className="lyvra-cred-roles">
            {[
              { co: "Microsoft", title: "Deputy Country Manager" },
              { co: "Tele2", title: "Interim Commercial Lead" },
              { co: "Sun Microsystems", title: "Technology Leadership" },
              { co: "15+ SME & VC-Backed Companies", title: "Growth & Turnaround" },
            ].map((r) => (
              <div className="lyvra-cred-role" key={r.co}>
                <span className="lyvra-cr-co">{r.co}</span>
                <span className="lyvra-cr-title">{r.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column ── */}
        <div ref={right.ref} style={revealStyle(right.visible, 0.12)}>
          <p className="lyvra-tag">The Results</p>
          <div className="lyvra-results-grid">
            {[
              {
                n: <>18<sup>mo</sup></>,
                label: "Microsoft PSS EMEA",
                desc: "Last place in EMEA → top divisional performance in 18 months",
              },
              {
                n: "40%",
                label: "Revenue Growth",
                desc: "Cut costs while maintaining revenue at scale",
              },
              {
                n: "250",
                label: "Person Organisation",
                desc: "Tele2: cut costs while maintaining full revenue across 250-person org",
              },
              {
                n: "15+",
                label: "VC-Backed Companies",
                desc: "Let founders focus on growth while we fix the foundations and chaos",
              },
            ].map((cell, i) => (
              <div className="lyvra-res-cell" key={i}>
                <div className="lyvra-res-n">{cell.n}</div>
                <div className="lyvra-res-label">{cell.label}</div>
                <div className="lyvra-res-desc">{cell.desc}</div>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: ".78rem",
              lineHeight: 1.65,
              color: "var(--g600)",
              fontWeight: 300,
            }}
          >
            With a team of proven, ethical partners — executes with discipline,
            no implementation combined with promise but over-strategy. Delivers.
          </p>
        </div>

      </div>
    </section>
  );
}
