import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="vi">
      <Head>
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
      </Head>

      <body>
        <Main />
        <NextScript />

        <Script
          src="/assets/js/jquery.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/popper.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/bootstrap.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/jquery.fancybox.js"
          strategy="beforeInteractive"
        ></Script>
        <Script src="/assets/js/wow.js" strategy="beforeInteractive"></Script>

        <Script
          src="/assets/js/select2.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script src="/assets/js/owl.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/js/script.js" strategy="afterInteractive"></Script>
      </body>
    </Html>
  );
}
