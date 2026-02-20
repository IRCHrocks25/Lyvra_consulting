import bgImg from 'figma:asset/1cb92f47f59165b475f0b27fd1d75d531579f797.png';

export function LyvraContact() {
  return (
    <section className="lyvra-s-cta" id="contact" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="lyvra-cta-center rv">
        <h2 className="lyvra-cta-hl">
          No slides. No pitch.<br /><span>Just results.</span>
        </h2>
        <a href="#" className="lyvra-cta-btn-main rv d1">
          Book a 15-min Growth Call →
        </a>
      </div>
    </section>
  );
}