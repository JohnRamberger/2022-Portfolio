import React from "react";
import styles from "./App.module.scss";
//router
import { useParams } from "react-router-dom";

//config
import config from "./config/config";

//ThemeMap
import ThemeMap from "./config/ThemeMap";

function App() {
  const { theme } = useParams();

  return (
    <div className={styles.App}>
      {/* Load the site theme based on the param, or load the default theme if not found */}
      {theme && ThemeMap.has(parseInt(theme))
        ? ThemeMap.get(parseInt(theme))
        : ThemeMap.get(config.defaultTheme)}
    </div>
  );
}

export default App;
