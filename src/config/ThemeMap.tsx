import Retro from "../pages/Retro/Retro";
import SciFi from "../pages/SciFi/SciFi";
import Simple from "../pages/Simple/Simple";

const ThemeMap = new Map<number, JSX.Element>([
  [0, <Simple />],
  [1, <SciFi />],
  [2, <Retro />],
]);

export default ThemeMap;
