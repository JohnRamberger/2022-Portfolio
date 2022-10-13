import React, { FC } from "react";
import styles from "./ExperienceCard.module.scss";

import { ExperienceContent, Experience } from "../../../config/Content";
import Flex from "../../../layout/Flex/Flex";

interface ExperienceCardProps {
  experience?: Experience;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => (
  <div className={styles.ExperienceCard} data-testid="ExperienceCard">
    <Flex dir="row">
      <div className={styles.Image}>
        <img
          src={experience?.company_image}
          alt={experience?.company + " logo"}
        />
      </div>
    </Flex>
  </div>
);

export default ExperienceCard;
