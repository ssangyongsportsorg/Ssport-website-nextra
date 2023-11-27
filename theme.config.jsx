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
   search: {
    placeholder: "搜尋....",
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – 雙龍體育'
      }
    }
  },
  head: function useHead() {
    const { description } = useConfig()
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? '/seo.png'
        : `/seo.png`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="zh-tw" />
      
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta
          name="og:title"
          content={title ? title + ' – 雙龍體育' : '雙龍體育'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/seo.png"
          type="/seo.png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
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
