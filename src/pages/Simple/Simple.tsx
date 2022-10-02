import React, { FC } from "react";
import styles from "./Simple.module.scss";
import page_styles from "../page.module.scss";

import Navbar from "../../components/Simple/Navbar/Navbar";
import Hero from "../../components/Simple/Hero/Hero";
import Footer from "../../components/Footer/Footer";

interface SimpleProps {}

const Simple: FC<SimpleProps> = () => (
  <div className={`${styles.Simple} ${page_styles.Page}`} data-testid="Simple">
    <Navbar />
    <Hero />
    <Footer />
  </div>
);

export default Simple;
