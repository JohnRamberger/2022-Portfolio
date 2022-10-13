import React, { lazy, Suspense } from "react";
import { Experience } from "../../../config/Content";

const LazyExperienceCard = lazy(() => import("./ExperienceCard"));

const ExperienceCard = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & {
    experience: Experience[];
  }
) => (
  <Suspense fallback={null}>
    <LazyExperienceCard {...props} />
  </Suspense>
);

export default ExperienceCard;
