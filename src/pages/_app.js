import React from 'react';
import Head from 'next/head';
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

        <title>Keeper App</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp