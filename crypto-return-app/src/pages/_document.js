import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_package/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_package/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_package/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/favicon_package/site.webmanifest"></link>
        <link
          rel="mask-icon"
          href="/favicon_package/safari-pinned-tab.svg"
          color="#5bbad5"
        ></link>
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
        {/* Document title */}
        <title>Blockchain Network Finder</title>
        <meta name="description"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
