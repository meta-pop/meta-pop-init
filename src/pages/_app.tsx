import "../bootstrap";
import "../styles/index.css";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import Dots from "app/components/Dots";
import DefaultLayout from "app/layouts/Default";
import store, { persistor } from 'app/state'
import * as plurals from "make-plural/plurals";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// @ts-ignore TYPE NEEDS FIXING
function MyApp({ Component, pageProps, fallback, err }) {
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

  // Allows for conditionally setting a provider to be hoisted per page
  const Provider = Component.Provider || Fragment;

  // Allows for conditionally setting a layout to be hoisted per page
  const Layout = Component.Layout || DefaultLayout;

  // Allows for conditionally setting a guard to be hoisted per page
  const Guard = Component.Guard || Fragment;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
        <ReduxProvider store={store}>
          <PersistGate loading={<Dots>loading</Dots>} persistor={persistor}>
            <Provider>
              <Layout>
                <Guard>
                  <Component {...pageProps} err={err} />
                </Guard>
              </Layout>
            </Provider>
          </PersistGate>
        </ReduxProvider>
      </I18nProvider>
    </>
  );
}

export default MyApp;
