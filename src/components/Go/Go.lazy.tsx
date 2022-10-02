import React, { lazy, Suspense } from 'react';

const LazyGo = lazy(() => import('./Go'));

const Go = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyGo {...props} />
  </Suspense>
);

export default Go;
