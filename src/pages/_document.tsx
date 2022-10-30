/* eslint-disable @next/next/no-document-import-in-page */
// pages/_document.js
import { Head, Html, Main, NextScript } from 'next/document'

const APP_NAME = 'MetaPop'
const APP_TITLE = 'NFT generator'
const APP_DESCRIPTION = 'NFT generator'
const APP_KEYWORDS =
  'MetaPop, NFT, erc721, tokens, tokenization, digital goods, trade, crypto, blockchain'
const APP_AUTHORS = 'MetaPop Team'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#0993ec" />

        {/* <link rel="apple-touch-icon" sizes="16x16" href="/icons/icon-16x16.png" />
        <link rel="apple-touch-icon" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png" /> */}

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="author" content={APP_AUTHORS} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="keywords" content={APP_KEYWORDS} />

        <meta property="og:title" content={APP_TITLE} />
        <meta property="og:url" content="https://freefrom.fi/" />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:image" content="/icons/icon-192x192.png" />
        <meta property="og:locale" content="ja" />
        <meta property="og:site_name" content={APP_NAME} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={APP_TITLE} />
        <meta name="twitter:description" content={APP_DESCRIPTION} />
        <meta name="twitter:image" content="/icons/icon-192x192.png" />
        <meta name="twitter:site" content="@MetaPop" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
