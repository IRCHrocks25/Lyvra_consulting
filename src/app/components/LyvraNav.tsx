import logoImg from "figma:asset/61f37c316ecb1398921309e55d6e9a1dc1413e96.png";

export function LyvraNav() {
  return (
    <nav className="lyvra-nav">
      <a href="#" className="lyvra-nav-logo">
        <img src={logoImg} alt="Lyvra" style={{ height: "28px", width: "auto", display: "block" }} />
      </a>
      <ul className="lyvra-nav-links">
        <li><a href="#cred">Expertise</a></li>
        <li><a href="#pain">Challenges</a></li>
        <li><a href="#service">Our Offer</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#lead">Free Assessment</a></li>
      </ul>
      <a href="#contact" className="lyvra-nav-cta">
        Book a 15-min Call
      </a>
    </nav>
  );
}
