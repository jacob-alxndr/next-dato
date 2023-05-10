import "../styles/app.globals.scss";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-base",
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        {/* <link rel="preconnect" href={`//graphql.datocms.com`}></link>
        <link rel="dns-preconnect" href="https://datocms-assets.com"></link>
        <link rel="dns-prefetch" href="https://datocms-assets.com"></link> */}
        {/* EXAMPLE:: Adobe typekit integration */}
        {/* <link
          rel="stylesheet"
          href="https://use.typekit.net/fqk8hnt.css"
        ></link> */}
        <style>{`
          :root {
            --font-base: ${inter.style.fontFamily};

          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
