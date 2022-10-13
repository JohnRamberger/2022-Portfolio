import React, { lazy, Suspense } from 'react';

const LazyExperienceCard = lazy(() => import('./ExperienceCard'));

const ExperienceCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExperienceCard {...props} />
  </Suspense>
);

export default ExperienceCard;
