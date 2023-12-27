// components/Layout.js

import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Include the Google Fonts in the Head component */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;400;500;700&family=Play:wght@400;700&family=Roboto+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* Render the children components */}
      {children}
    </div>
  );
};

export default Layout;
