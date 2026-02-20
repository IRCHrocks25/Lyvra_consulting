import { LyvraCursor } from "./components/LyvraCursor";
import { LyvraNav } from "./components/LyvraNav";
import { LyvraHero } from "./components/LyvraHero";
import { LyvraCredibility } from "./components/LyvraCredibility";
import { LyvraStatistics } from "./components/LyvraStatistics";
import { LyvraPainPoints } from "./components/LyvraPainPoints";
import { LyvraServices } from "./components/LyvraServices";
import { LyvraMethodology } from "./components/LyvraMethodology";
import { LyvraAbout } from "./components/LyvraAbout";
import { LyvraLeadMagnet } from "./components/LyvraLeadMagnet";
import { LyvraContact } from "./components/LyvraContact";
import { LyvraFooter } from "./components/LyvraFooter";
import { LyvraScrollReveal } from "./components/LyvraScrollReveal";

export default function App() {
  return (
    <>
      <LyvraCursor />
      <LyvraScrollReveal />
      <LyvraNav />
      <LyvraHero />
      <LyvraCredibility />
      <LyvraStatistics />
      <LyvraPainPoints />
      <LyvraServices />
      <LyvraMethodology />
      <LyvraAbout />
      <LyvraLeadMagnet />
      <LyvraContact />
      <LyvraFooter />
    </>
  );
}