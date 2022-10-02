import React, { FC } from "react";
import styles from "./Go.module.scss";

import { Link as LinkProps } from "../../config/Content";
import { Link } from "react-router-dom";

interface GoProps {
  link?: LinkProps;
  style?: React.CSSProperties;
}

const Go: FC<GoProps> = ({ link, style }) => {
  if (link)
    return (
      <div className={`${styles.Go}`} data-testid="Go" style={style}>
        {link.type === "a" ? (
          <a href={link.url} className={styles.Link} target={link.target ?? ""}>
            {link.label}
          </a>
        ) : (
          <Link to={link.url} className={styles.Link}>
            {link.label}
          </Link>
        )}
      </div>
    );
  else return <p>missing link</p>;
};

export default Go;
