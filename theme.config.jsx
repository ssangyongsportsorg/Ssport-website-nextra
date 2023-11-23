import Footer from './pages/components/footer'
import Login from './pages/components/login'

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
   gitTimestamp: ({ timestamp }) => {
    return (
      <p className="text-lg">最後更新於 {timestamp.toLocaleDateString()}</p>
    );
  },
};
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
