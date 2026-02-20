import { useEffect, useRef, useState } from "react";
import mountainImg from "figma:asset/b8e7cc653f32baf3f3045983b0245972b6bb2e6a.png";
import architectureImg from "figma:asset/379e597b52034fcaaf26c2363f8cccd929923df2.png";
import officeImg from "figma:asset/9ea6d7d7f1bd0a1797213c7a8d4b3f2e3e120c1b.png";

const hcTitles = ["SME AI Transformation", "Revenue Architecture", "Operational Fix"];
const hcBars = ["33%", "66%", "100%"];
const hcBgs = [
  { type: "image", value: mountainImg },
  { type: "image", value: architectureImg },
  { type: "image", value: officeImg },
];

function applyBg(el: HTMLDivElement, idx: number) {
  const bg = hcBgs[idx];
  if (bg.type === "image") {
    el.style.backgroundImage = `url(${bg.value})`;
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center";
  } else {
    el.style.backgroundImage = bg.value;
    el.style.backgroundSize = "";
    el.style.backgroundPosition = "";
  }
}

export function LyvraHero() {
  const [slideIdx, setSlideIdx] = useState(0);
  const bgRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = (idx: number) => {
    const next = ((idx % 3) + 3) % 3;
    setSlideIdx(next);
    if (bgRef.current) applyBg(bgRef.current, next);
  };

  useEffect(() => {
    if (bgRef.current) applyBg(bgRef.current, 0);
    timerRef.current = setInterval(() => {
      setSlideIdx((prev) => {
        const next = (prev + 1) % 3;
        if (bgRef.current) applyBg(bgRef.current, next);
        return next;
      });
    }, 8000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.22}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlePrev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    goToSlide(slideIdx - 1);
    timerRef.current = setInterval(() => {
      setSlideIdx((prev) => {
        const next = (prev + 1) % 3;
        if (bgRef.current) applyBg(bgRef.current, next);
        return next;
      });
    }, 8000);
  };

  const handleNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    goToSlide(slideIdx + 1);
    timerRef.current = setInterval(() => {
      setSlideIdx((prev) => {
        const next = (prev + 1) % 3;
        if (bgRef.current) applyBg(bgRef.current, next);
        return next;
      });
    }, 8000);
  };

  return (
    <section className="lyvra-hero">
      <div className="lyvra-hero-bg" ref={bgRef} />
      <div className="lyvra-hero-content">
        <p className="lyvra-hero-label">Lyvra Consulting</p>
        <h1 className="lyvra-hero-hl">
          <span style={{ whiteSpace: 'nowrap' }}>Achieve Structured Growth<span style={{ color: 'var(--red)' }}>.</span></span><br />
          <span className="lyvra-hero-hl-sub">Your AI ROI Roadmap in 90 Days.</span>
        </h1>
        <p className="lyvra-hero-sub">
          Most SME owners know they need AI. Few know how to implement it without losing control.
        </p>
        <div className="lyvra-hero-ctas">
          <a href="#contact" className="lyvra-btn-primary">
            Book a 15-min Growth Call
          </a>
        </div>
      </div>

      <div className="lyvra-hero-card">
        <div className="lyvra-hc-label">Current Engagement</div>
        <div className="lyvra-hc-title">{hcTitles[slideIdx]}</div>
        <div className="lyvra-hc-bar-wrap">
          <div className="lyvra-hc-bar" style={{ width: hcBars[slideIdx] }} />
        </div>
        <div className="lyvra-hc-nav">
          <span className="lyvra-hc-count">0{slideIdx + 1} / 03</span>
          <div className="lyvra-hc-arrows">
            <button aria-label="Prev" onClick={handlePrev}>←</button>
            <button aria-label="Next" onClick={handleNext}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}