import Footer from './pages/components/footer'
import Login from './pages/components/login'
import React from 'react';
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
