import "@styles/globals.scss";

import type { AppProps } from "next/app";

import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { PathContextManager } from "@contexts";

import { local } from "@services";
import Layout from "@components/composition/Layout";
import Loader from "@components/composition/Loader";

function MyApp({ Component, pageProps }: AppProps) {
  const { events } = useRouter();

  useEffect(() => {
    events.on("routeChangeStart", local.gradients.save);

    return () => {
      events.off("routeChangeStart", local.gradients.save);
    };
  });

  return (
    <>
      <Head>
        <title>Kolor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <PathContextManager.PathContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PathContextManager.PathContextProvider>
    </>
  );
}

export default MyApp;
