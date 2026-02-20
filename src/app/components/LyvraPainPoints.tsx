import { useState } from "react";
import painImage from "figma:asset/622ef6e5ad1745de91604346e1dcac07bbdd8e94.png";

const pains = [
  {
    name: '"Our growth is burning cash faster than we can make it."',
    problem: "You're working 80-hour weeks. Revenue's up 40%. But your bank account makes you panic at 3am. Every acceleration breaks something: budgets don't stretch, teams fracture, projects miss deadlines.",
    success: { label: "What Success Looks Like:", text: "Revenue growth with margin expansion. 80-hour weeks become 50. You sleep through the night." },
  },
  {
    name: '"We know AI matters, but we have no clue where to start."',
    problem: "Every vendor promises AI will automate 40% of your work. But which 40%? What tools? Every week there's a new tool. You freeze. Competitors move faster.",
    success: { label: "What Success Looks Like:", text: "A clear 12-month AI roadmap. Every tool delivers ROI. Your team knows which AI use cases matter and in what order." },
  },
  {
    name: '"Our fundamentals are broken. AI will just accelerate the disaster."',
    problem: "You lack clean data. Your processes are held together with duct tape and prayers. Layering AI onto a broken system automates chaos at scale.",
    success: { label: "What Success Looks Like:", text: "Your processes are mapped. Your team knows what success looks like. You have foundational systems in place BEFORE deploying AI. When AI arrives, it amplifies health instead of chaos." },
  },
];

export function LyvraPainPoints() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? -1 : i);
  };

  return (
    <section className="lyvra-s-pain" id="pain">
      <div className="lyvra-pain-left">
        <h2 className="lyvra-pain-hl rv">Scale Fast.<br />Stay in Control.</h2>
        <p className="lyvra-pain-intro rv d1">
          You know you must integrate AI to accelerate growth. We give you the blueprint to do it without the budget overruns, team chaos, or costly guesswork.
        </p>
        <p className="lyvra-pain-subtitle rv d2">Why Aggressive Growth Turns into Chaos</p>

        <div className="lyvra-pain-list">
          {pains.map((pain, i) => {
            const isOpen = openIdx === i;
            return (
              <div className={`lyvra-pain-item${isOpen ? " open" : ""} rv`} key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="lyvra-pain-row" onClick={() => toggle(i)}>
                  <span className="lyvra-pi-num">✖</span>
                  <span className="lyvra-pi-name">{pain.name}</span>
                  <span className="lyvra-pi-icon">{isOpen ? "×" : "+"}</span>
                </div>
                {isOpen && (
                  <div className="lyvra-pain-expand">
                    <p className="lyvra-pe-problem">{pain.problem}</p>
                    <div className="lyvra-pe-success">
                      <span className="lyvra-pe-tick">✔</span>
                      <div>
                        <strong>{pain.success.label}</strong> {pain.success.text}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <a href="#service" className="lyvra-pain-cta rv d4">
          Let's Start Building. Get Your AI Strategy Call
        </a>
      </div>

      <div className="lyvra-pain-right">
        <img src={painImage} alt="SME owner working outdoors with tablet" className="lyvra-pain-img-photo" />
      </div>
    </section>
  );
}