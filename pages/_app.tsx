import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from './components/head'
import Footer from './components/footer'
import { SessionProvider } from 'next-auth/react'
import Script from 'next/script';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  // 检查是否是 RestrictedPage，如果是，则不使用 app.tsx
  if (Component.name === 'support') {
    return (
      <div>
         <Component {...pageProps} />
      </div>
    );
  }

  
  return (
    <div>
      
         <SessionProvider session={session}>
        
          <Component {...pageProps} />
    
        </SessionProvider>
    
    </div>
  );
        }
