import "bootstrap/dist/css/bootstrap.css";

import "@/styles/globals.css";
import { useEffect } from "react";
// import { Roboto_Mono, Alegreya_Sans } from "next/font/google";

// export const roboto_mono = Roboto_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   display: "swap",
//   variable: "--font-roboto",
// });

// export const alegreya_sans = Alegreya_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "700"],
//   display: "swap",
// });
export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />;
}
