import { useState } from "react";
import bgImage from "figma:asset/388b7dcc9652d38ef04587ca116ac73128285447.png";

const whatYouGet = [
  {
    num: "01",
    title: "Clear AI Diagnosis",
    desc: "Know exactly where your business stands on AI readiness — no guesswork.",
  },
  {
    num: "02",
    title: "Highest-ROI Opportunities",
    desc: "Pinpoint the specific areas where AI can generate measurable returns fastest.",
  },
  {
    num: "03",
    title: "Your 90-Day Roadmap",
    desc: "Walk away with a concrete, prioritized action plan built for your company size.",
  },
];

export function LyvraLeadMagnet() {
  const [form, setForm] = useState({ name: "", email: "", size: "" });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Placeholder submit
  };

  return (
    <section
      className="lyvra-s-lead"
      id="lead"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="lyvra-lead-inner">

        <div className="lyvra-lead-topbar rv">
          <div>
            <h2 className="lyvra-lead-hl">
              The AI Readiness<br /><span>Assessment.</span>
            </h2>
          </div>
          <p className="lyvra-lead-problem-tagline">Get Clear on AI in 15 Minutes</p>
        </div>

        <div className="lyvra-lead-cols">
          {/* LEFT: what you get */}
          <div className="lyvra-lead-left">
            <div className="lyvra-lead-what rv d2">
              <div className="lyvra-lw-header">
                <span className="lyvra-lw-eyebrow lyvra-lw-eyebrow--white">What You Get</span>
                <span className="lyvra-lw-free-badge">Free</span>
              </div>
              <div className="lyvra-lw-cards">
                {whatYouGet.map((item) => (
                  <div className="lyvra-lw-card" key={item.num}>
                    <div className="lyvra-lw-card-num">{item.num}</div>
                    <div className="lyvra-lw-card-body">
                      <div className="lyvra-lw-card-title">{item.title}</div>
                      <div className="lyvra-lw-card-desc">{item.desc}</div>
                    </div>
                    <div className="lyvra-lw-card-check">✓</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: form only — moved up */}
          <div className="lyvra-lead-right">
            <div className="lyvra-lead-form rv">
              <div className="lyvra-lf-tag">Free Download — No Credit Card Required</div>
              <div className="lyvra-lf-title">Download Your AI Readiness Assessment</div>
              <div className="lyvra-lf-fields">
                <div className="lyvra-lf-field">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="lyvra-lf-field">
                  <label>Work Email</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="lyvra-lf-field">
                  <label>Company Size</label>
                  <select
                    value={form.size}
                    onChange={(e) => setForm({ ...form, size: e.target.value })}
                  >
                    <option value="">Select company size...</option>
                    <option>1–10 employees</option>
                    <option>11–50 employees</option>
                    <option>51–250 employees</option>
                    <option>250–500 employees</option>
                    <option>500+ employees</option>
                  </select>
                </div>
              </div>
              <button className="lyvra-lf-btn" onClick={handleSubmit}>
                Download Your AI Readiness Assessment
              </button>
              <p className="lyvra-lf-note">
                Built for SME owners in Sweden / Nordics. No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}