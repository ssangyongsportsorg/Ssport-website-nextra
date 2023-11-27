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
  useNextSeoProps() {
    const { asPath, route } = useRouter();
    const { frontMatter, title } = useConfig();

    const image = frontMatter.image != null && {
      alt: title,
      url: frontMatter.image,
    };

    const description =
      frontMatter.description ??
      "雙龍體育網站- 專業體育賽事！ 提供最新的雙龍體育資訊、TV、運動比賽報導，讓您輕鬆了解雙龍體育。歡迎加入雙龍運動論壇，一起與大家溝通！";

    return {
      canonical: `https://yeecord.com${asPath}`,
      titleTemplate: route === "/" ? "%s" : "%s – 雙龍體育",
      twitter: {
        cardType: "summary_large_image",
      },
      description: description,
      openGraph: {
        description: description,
        type: "website",
        images: [
          image || {
            url: "/seo.png",
            alt: "雙龍體育",
          },
        ],
      },
    };
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
