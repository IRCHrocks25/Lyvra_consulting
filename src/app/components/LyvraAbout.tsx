import { useEffect, useRef, useState } from "react";
import peterImg from "figma:asset/8dc74074c3fe53b80a10773316ed8e2b38b36456.png";
import johanImg from "figma:asset/11548c5e7f9049f8d21dcf800fdc2611d99f8555.png";
import quoteBgImg from "figma:asset/251b7f52d2c3d99e5445bad40a456b9de67955c1.png";

/* ─── tiny hook: reveals the element it's attached to ─── */
function useReveal(delay = 0) {
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
      { threshold: 0, rootMargin: "0px 0px 80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(2.2rem)",
    transition: `opacity 0.85s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.85s cubic-bezier(.16,1,.3,1) ${delay}s`,
  };

  return { ref, style };
}

/* ─── data ─── */
const founders = [
  {
    tag: "Co-Founder & CEO",
    name: "Peter Lövgren",
    role: "The Fixer · Microsoft · Tele2 · Sun Microsystems",
    body: (
      <>
        Peter spent <strong>20+ years</strong> in corporate technology
        leadership at Microsoft, Sun Microsystems, and Tele2. He restructured
        organisations, rebuilt management systems, and transformed unit
        performance from{" "}
        <strong>worst-in-region to best-in-region</strong>.
        <br />
        <br />
        His strength: seeing all the moving parts at once and orchestrating
        them with clarity.
        <br />
        <br />
        Then he retired in 2018. Built a different life with young kids in
        Portugal. Until the AI wave arrived. Peter saw the parallels to the PC
        revolution of the 1990s — a technology nobody could avoid. He realised
        he had two decades of business logic to offer.{" "}
        <strong>Knowledge to pass forward</strong> and a path to a continuous
        learning spiral and personal growth.
      </>
    ),
    highlight: '"Peter brings the playbook. Johan builds the engine to run it."',
  },
  {
    tag: "Co-Founder & COO",
    name: "Johan Lövgren",
    role: "The Implementation Engine · KTH · Stockholm University",
    body: (
      <>
        Johan brings the technical rigour Peter's strategy requires. He studied{" "}
        <strong>
          Mechanical Engineering and Applied Financial Mathematics
        </strong>{" "}
        (Master's degree) at KTH Royal Institute of Technology, where his
        thesis focused on trading algorithms. He also holds a{" "}
        <strong>Bachelor's in Business Administration and Economics</strong>{" "}
        from Stockholm University.
        <br />
        <br />
        Before co-founding Lyvra, he worked as a Business Controller, helping
        entrepreneurs analyse investments and optimise operations.
        <br />
        <br />
        While Peter spent decades building organisations,{" "}
        <strong>Johan brings technical precision and deep drive</strong>. Peter
        brings the playbook; Johan builds the engine to run it.
      </>
    ),
    highlight:
      '"Technical precision and consistent execution — the engine behind the strategy."',
  },
];

const whyCards = [
  {
    n: "01",
    title: "The Team: Execution You Can Trust",
    body: "Lyvra partners with proven AI specialists and technical experts who translate strategy into results. No theoretical frameworks. No disappearing acts. Just disciplined, reliable delivery grounded in real-world constraints.",
  },
  {
    n: "02",
    title: "Why This Works",
    body: (
      <>
        Peter brings proven strategy and the ability to challenge conventional
        thinking. The team brings technical precision and consistent execution.
        Together:{" "}
        <strong>strategy that works and delivery you can depend on.</strong>
      </>
    ),
  },
  {
    n: "03",
    title: "Why We Built Lyvra",
    body: (
      <>
        We built it because we see a gap: businesses know they need to move but
        don't know how without falling apart. They see the AI opportunity but
        not the path. They feel urgency but not direction.{" "}
        <strong>That gap is where we operate.</strong>
      </>
    ),
  },
];

/* ─── component ─── */
export function LyvraAbout() {
  const introLeft  = useReveal(0);
  const introRight = useReveal(0.12);
  const pullquote  = useReveal(0);
  const founder0   = useReveal(0);
  const founder1   = useReveal(0.12);
  const why0       = useReveal(0);
  const why1       = useReveal(0.1);
  const why2       = useReveal(0.2);
  const cta        = useReveal(0);

  const whyReveal = [why0, why1, why2];
  const founderReveal = [founder0, founder1];

  return (
    <section className="lyvra-s-about" id="about">
      <div className="lyvra-about-inner">

        {/* intro grid */}
        <div className="lyvra-about-intro">
          <div ref={introLeft.ref} style={introLeft.style}>
            <p className="lyvra-tag">About</p>
            <h2 className="lyvra-about-hl">
              Experience That
              <br />
              Listens. Speed
              <br />
              That <span>Delivers.</span>
            </h2>
            <p
              style={{
                fontSize: ".8rem",
                fontWeight: 600,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--g400)",
              }}
            >
              Why experience and execution work better together.
            </p>
          </div>

          <div ref={introRight.ref} style={introRight.style}>
            <p className="lyvra-about-intro-body">
              Peter came out of retirement because the AI wave reminded him of
              the PC revolution.{" "}
              <strong>A technology no one can avoid.</strong> But he knew
              something crucial: experience without execution becomes
              irrelevant. Strategy without delivery never lands.
            </p>
            <p className="lyvra-about-intro-body">
              To build Lyvra, Peter realised he needed a partner who wasn't
              just another consultant. He needed someone{" "}
              <strong>grounded in modern technology</strong>. Someone who could
              translate vision into reality.
            </p>
          </div>
        </div>

      </div>{/* /lyvra-about-inner — close before full-bleed pullquote */}

      {/* pull-quote — full bleed */}
      <div
        ref={pullquote.ref}
        style={{
          ...pullquote.style,
          backgroundImage: `url(${quoteBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="lyvra-about-pullquote lyvra-about-pullquote--editorial"
      >
        <div className="lyvra-apq-mark">"</div>
        <p className="lyvra-apq-text">
          <span className="lyvra-apq-dim">I came out of retirement because I saw the AI wave needed timeless logic and proven expertise.</span>
          {" "}This is not a hobby, it's a growth strategy in an inspiring environment. It is a lifeline for businesses{" "}
          <span className="lyvra-apq-dim">that need to navigate this unpredictable acceleration with a commander's certitude.</span>
        </p>
        <div className="lyvra-apq-footer">
          <div className="lyvra-apq-rule" />
          <p className="lyvra-apq-attr">Peter Lövgren — Co-Founder &amp; CEO, Lyvra</p>
        </div>
      </div>

      <div className="lyvra-about-inner">

        {/* founder cards */}
        <div className="lyvra-founders-grid">
          {founders.map((f, i) => {
            const isPeter = i === 0;
            const photo = isPeter ? (
              <div className="lyvra-fc-photo">
                <img src={peterImg} alt="Peter Lövgren" className="lyvra-fc-photo-img" />
              </div>
            ) : (
              <div className="lyvra-fc-photo">
                <img src={johanImg} alt="Johan Lövgren" className="lyvra-fc-photo-img" />
              </div>
            );
            const text = (
              <div className="lyvra-fc-content">
                <div className="lyvra-fc-tag">{f.tag}</div>
                <div className="lyvra-fc-name">{f.name}</div>
                <div className="lyvra-fc-role">{f.role}</div>
                <div className="lyvra-fc-divider" />
                <p className="lyvra-fc-body">{f.body}</p>
                <div className="lyvra-fc-highlight">{f.highlight}</div>
              </div>
            );
            return (
              <div
                ref={founderReveal[i].ref}
                style={founderReveal[i].style}
                className="lyvra-founder-card"
                key={i}
              >
                <div className="lyvra-fc-inner">
                  {isPeter ? <>{photo}{text}</> : <>{text}{photo}</>}
                </div>
              </div>
            );
          })}
        </div>

        {/* why cards */}
        <div className="lyvra-why-grid">
          {whyCards.map((c, i) => (
            <div
              ref={whyReveal[i].ref}
              style={whyReveal[i].style}
              className="lyvra-why-card"
              key={i}
            >
              <div className="lyvra-wc-n">{c.n}</div>
              <div className="lyvra-wc-title">{c.title}</div>
              <p className="lyvra-wc-body">{c.body}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div ref={cta.ref} style={cta.style} className="lyvra-about-cta-strip">
          <p className="lyvra-acs-text">
            See Where You Stand.{" "}
            <span>Take the AI Readiness Assessment.</span>
          </p>
          <a href="#lead" className="lyvra-acs-btn">
            Get Your Free Assessment →
          </a>
        </div>

      </div>
    </section>
  );
}