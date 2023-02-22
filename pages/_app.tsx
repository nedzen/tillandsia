// import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import * as Fathom from 'fathom-client';
import posthog from 'posthog-js';

import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/app.scss';

if (typeof window !== 'undefined') {
  // This ensures that as long as we are client-side, posthog is always ready
  // NOTE: If set as an environment variable be sure to prefix with `NEXT_PUBLIC_`
  // For more info see https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser

  posthog.init('phc_1QBmle4Cc7P82mKBGL3JtPpfElYMu1Eu8d4U1VcwQ4v', {
    api_host: 'https://app.posthog.com',
  });
}

if (typeof window !== 'undefined') {
  // This ensures that as long as we are client-side, posthog is always ready
  posthog.init('phc_1QBmle4Cc7P82mKBGL3JtPpfElYMu1Eu8d4U1VcwQ4v', {
    api_host: 'https://app.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.opt_out_capturing();
    },
  });
}

function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  // for Posthog
  useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog.capture('$pageview');
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  // for fathom
  // useEffect(() => {
  //   // Initialize Fathom when the app loads
  //   // Example: yourdomain.com
  //   //  - Do not include https://
  //   //  - This must be an exact match of your domain.
  //   //  - If you're using www. for your domain, make sure you include that here.
  //   Fathom.load('KLODAZSU', {
  //     includedDomains: ['mariusnedelcu.com'],
  //   });

  //   function onRouteChangeComplete() {
  //     Fathom.trackPageview();
  //   }
  //   // Record a pageview when route changes
  //   router.events.on('routeChangeComplete', onRouteChangeComplete);

  //   // Unassign event listener
  //   return () => {
  //     router.events.off('routeChangeComplete', onRouteChangeComplete);
  //   };
  // }, []);

  return <Component {...pageProps} />;
}

export default App;
