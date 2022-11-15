import "../bootstrap";
import "../styles/globals.css";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import Header from "app/components/Header";
import Layout from "app/layouts/Default";
import store from 'app/state'
import { Flowbite, Spinner } from "flowbite-react";
import * as plurals from "make-plural/plurals";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { FC, Suspense, useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";


// @ts-ignore TYPE NEEDS FIXING
const MetaPop: FC<AppProps> = ({ Component, pageProps, fallback, err }): JSX.Element => {
  const router = useRouter();
  const { locale, events } = router;
  // 加载多语言文件
  useEffect(() => {
    // @ts-ignore TYPE NEEDS FIXING
    async function load(locale) {
      // @ts-ignore TYPE NEEDS FIXING
      i18n.loadLocaleData(locale, { plurals: plurals[locale.split("_")[0]] });

      const { messages } = await import(
        `@lingui/loader!./../../locale/${locale}.json?raw-lingui`
      );
      i18n.load(locale, messages);

      i18n.activate(locale);
    }

    load(locale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center">
          <Spinner size="lg" /> Loading..
        </div>
      }
    >
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
        <ReduxProvider store={store}>
          <Flowbite>
              <Layout>
                <Header />
                <Component {...pageProps} err={err} />
              </Layout>
          </Flowbite>
        </ReduxProvider>
      </I18nProvider>
    </Suspense>
  );
}

export default MetaPop;
