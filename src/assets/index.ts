import logo from "./logo2.asset.json";
import adani from "./logo-adani.asset.json";
import ansys from "./logo-ansys.asset.json";
import dl1 from "./logo-dl1.asset.json";
import dl2 from "./logo-dl2.asset.json";
import hcl from "./logo-hcl.asset.json";
import jiobp from "./logo-jiobp.asset.json";
import kec from "./logo-kec.asset.json";
import lt from "./logo-lt.asset.json";
import reliance from "./logo-reliance.asset.json";
import schneider from "./logo-schneider.asset.json";
import ultratech from "./logo-ultratech.asset.json";
import upc from "./logo-upc.asset.json";
import kleonAir from "./kleon-air.asset.json";
import kleonB1 from "./kleon-b1.asset.json";
import kleonDongle from "./kleon-dongle.asset.json";
import kleonV1 from "./kleon-v1.asset.json";
import kleonV2 from "./kleon-v2.asset.json";
import kleonV3 from "./kleon-v3.asset.json";
import nvidia from "./nvidia.asset.json";
import processCollection from "./process-collection.asset.json";
import processTransmission from "./process-transmission.asset.json";
import processInsights from "./process-insights.asset.json";
import samasthWorks from "./samasth-works.asset.json";
import samasth2 from "./samasth2.asset.json";

const u = (a: unknown) => (a as { url: string }).url;

export const assets = {
  logo: u(logo),
  adani: u(adani),
  ansys: u(ansys),
  dl1: u(dl1),
  dl2: u(dl2),
  hcl: u(hcl),
  jiobp: u(jiobp),
  kec: u(kec),
  lt: u(lt),
  reliance: u(reliance),
  schneider: u(schneider),
  ultratech: u(ultratech),
  upc: u(upc),
  kleonAir: u(kleonAir),
  kleonB1: u(kleonB1),
  kleonDongle: u(kleonDongle),
  kleonV1: u(kleonV1),
  kleonV2: u(kleonV2),
  kleonV3: u(kleonV3),
  nvidia: u(nvidia),
  processCollection: u(processCollection),
  processTransmission: u(processTransmission),
  processInsights: u(processInsights),
  samasthWorks: u(samasthWorks),
  samasth2: u(samasth2),
  // Generated cinematic scenes (illustrative visuals, not product photography)
  heroGenerated: new URL("./hero-generated.png", import.meta.url).href,
  samasthDashboard: new URL("./samasth-dashboard.png", import.meta.url).href,
  solutionWater: new URL("./solution-water.png", import.meta.url).href,
  solutionSolar: new URL("./solution-solar.png", import.meta.url).href,
  solutionConcrete: new URL("./solution-concrete.png", import.meta.url).href,
  solutionAir: new URL("./solution-air.png", import.meta.url).href,
};
