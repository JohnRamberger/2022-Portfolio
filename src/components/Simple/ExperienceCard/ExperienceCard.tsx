import React, { FC } from "react";
import styles from "./ExperienceCard.module.scss";

import { ExperienceContent, Experience } from "../../../config/Content";
import Flex from "../../../layout/Flex/Flex";

interface ExperienceCardProps {
  experience?: Experience[];
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => (
  <div className={styles.ExperienceCard} data-testid="ExperienceCard">
    <Flex dir="row" style={{ gap: "1em" }}>
      <div className={styles.Image}>
        {experience && experience[0] ? (
          <img
            src={experience[0]?.company_image}
            alt={experience[0]?.company + " logo"}
          />
        ) : (
          ""
        )}
      </div>
      <Flex dir="column" style={{ gap: "0.5em" }}></Flex>
    </Flex>
  </div>
);

export default ExperienceCard;
