import React from 'react';
import '../styles/globals.css'; // Import global styles here
import type { AppProps } from 'next/app'; // Import the type for AppProps

function MyApp({ Component, pageProps }: AppProps) { // Use the AppProps type
  return <Component {...pageProps} />;
}

export default MyApp;

