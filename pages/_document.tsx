import { initializeGoogleTagManager } from "@/utils/initializeGoogleTagManager";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useEffect } from "react";
import { GoogleTagManager } from '@next/third-parties/google'

export default function Document() {
  useEffect(() => {
    // Initialize Google Tag Manager with your GTM ID
    initializeGoogleTagManager("GTM-W2JL384");
  }, []);
  return (
    <Html lang="en">
      {/* <GoogleTagManager gtmId="GTM-W2JL384" /> */}
      <Head>
        <Script type="text/javascript" src="https://cache.consentframework.com/js/pa/32242/c/iD7S1/stub" />
        <Script type="text/javascript" src="https://choices.consentframework.com/js/pa/32242/c/iD7S1/cmp" async />
        <meta
          name="description"
          content="N°1 sur le cours de soutien universitaire depuis 2019. Préparation aux travaux dirigés, stages de révision, stages de pré-rentrée. Organise de formation reconnu par l'Etat."
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-W2JL384');`,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" />
      <body>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W2JL384"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
        <div className="app-container w-full max-w-[1800px] shadow-xl">
          <Main />
          <NextScript />
        </div>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function(I, L, T, i, c, k, s) {if(I.iticks) return;I.iticks = {host:c, settings:s, clientId:k, cdn:L, queue:[]};var h = T.head || T.documentElement;var e = T.createElement(i);var l = I.location;e.async = true;e.src = (L||c)+'/client/inject-v2.min.js';h.insertBefore(e, h.firstChild);I.iticks.call = function(a, b) {I.iticks.queue.push([a, b]);};})(window, 'https://cdn-v1.intelliticks.com/prod/common', document, 'script', 'https://app.intelliticks.com', '2RC6PTEaxf6LZTfdH_c', { });`
          }}  
        /> */}
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9105988.js"></script>

      </body>
    </Html>
  );
}
