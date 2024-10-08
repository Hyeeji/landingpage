import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>다이어트 챌린지</title>
        <meta
          name="description"
          content="Welcome to diet challenge landing page"
        />
      </Head>
      <main>
        {children}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1178130950134192');
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1178130950134192&ev=PageView&noscript=1"
          />
        </noscript>
      </main>
    </>
  );
}
