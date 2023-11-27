import Footer from './pages/components/footer'
import Login from './pages/components/login'
import React from 'react';
import { useConfig } from "nextra-theme-docs";

import { useRouter } from 'next/router';
export default {

  logo: <span><img
      src="/logo.png"
      className="mr-3 h-6 sm:h-9"
      alt="ssport Logo"
    /></span>,
  project: {
    link: 'https://github.com/ssangyongsportsorg/Ssport-website'
  },
   search: {
    placeholder: "搜尋....",
  },
  head: () => {
    const { asPath, pathname } = useRouter();
    const { frontMatter } = useConfig();

    const ogConfig = {
      title: '雙龍體育',
      description: '雙龍體育網站- 專業體育賽事！ 提供最新的雙龍體育資訊、TV、運動比賽報導，讓您輕鬆了解雙龍體育。歡迎加入雙龍運動論壇，一起與大家溝通！',
      favicon: '/favicon.svg',
    };
    const favicon = String(ogConfig.favicon);
    const title = String(frontMatter.title || ogConfig.title);
    const description = String(frontMatter.description || ogConfig.description);
    const note =
      (frontMatter.date as string | undefined) ?? pathname === '/'
        ? 'million.dev'
        : pathname;
    const canonical = new URL(asPath, 'https://ssangyongsports.eu.org').toString();

    const ogUrl =
      pathname === '/'
        ? `/seo.png`
        : `/seo.png`;
    
    return (
      <>
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
    
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="og:image" content={ogUrl} />

        <link rel="shortcut icon" href={favicon} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={favicon} type="image/svg+xml" />
        <meta name="apple-mobile-web-app-title" content={title} />

      </>
    );
  },
   
   navbar: {
    extraContent: (
      <div className="flex flex-row gap-3">
          <Login />
      </div>
    ),
  },
  footer: {
    component: <Footer />,
  },
      }
