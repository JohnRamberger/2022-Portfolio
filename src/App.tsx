import React, { useState } from "react";
import styles from "./App.module.scss";
//router
import { useParams } from "react-router-dom";

//config
import config from "./config/config";

//ThemeMap
import ThemeMap from "./config/ThemeMap";

function App() {
  const { theme } = useParams();
  // Load the site theme based on the param, or load the default theme if not found
  const [currentTheme] = useState<number>(
    theme && ThemeMap.has(parseInt(theme))
      ? parseInt(theme)
      : config.randomTheme
      ? Math.floor(Math.random() * Array.from(ThemeMap.keys()).length)
      : config.defaultTheme
  );

  return <div className={styles.App}>{ThemeMap.get(currentTheme)}</div>;
}

export default App;
