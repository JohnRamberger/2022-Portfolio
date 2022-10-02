import React, { FC } from "react";
import styles from "./Flex.module.scss";

interface FlexProps {
  children?: React.ReactNode;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  dir?: "row" | "row-reverse" | "column" | "column-reverse";
  style?: React.CSSProperties;
}

const Flex: FC<FlexProps> = ({ children, direction, dir, style }) => (
  <div
    className={styles.Flex}
    data-testid="Flex"
    style={{ flexDirection: direction || dir || "row", ...style }}
  >
    {children}
  </div>
);

export default Flex;
