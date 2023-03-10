import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/app.scss';

// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import posthog from 'posthog-js';

// if (typeof window !== 'undefined') {
//   // This ensures that as long as we are client-side, posthog is always ready
//   posthog.init('phc_1QBmle4Cc7P82mKBGL3JtPpfElYMu1Eu8d4U1VcwQ4v', {
//     api_host: 'https://app.posthog.com',
//     loaded: (posthog) => {
//       if (process.env.NODE_ENV === 'development') posthog.opt_out_capturing();
//     },
//   });
// }
// if (typeof window !== 'undefined') {
//   // This ensures that as long as we are client-side, posthog is always ready
//   // NOTE: If set as an environment variable be sure to prefix with `NEXT_PUBLIC_`
//   // For more info see https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser

//   posthog.init('phc_1QBmle4Cc7P82mKBGL3JtPpfElYMu1Eu8d4U1VcwQ4v', {
//     api_host: 'https://app.posthog.com',
//   });
// }

function App({ Component, pageProps }: AppProps): JSX.Element {
  // const router = useRouter();

  // for Posthog
  // useEffect(() => {
  //   // Track page views
  //   const handleRouteChange = () => posthog.capture('$pageview');
  //   router.events.on('routeChangeComplete', handleRouteChange);

  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, []);

  return <Component {...pageProps} />;
}

export default App;
