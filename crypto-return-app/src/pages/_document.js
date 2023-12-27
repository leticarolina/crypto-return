import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

        {/* Link tag to import the Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;400;500;700&family=Play:wght@400;700&family=Roboto+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Other head elements */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
