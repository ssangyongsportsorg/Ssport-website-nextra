import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
export default function Document() {
  return (
    <Html lang="zh-tw">
         

      <Head />
      
      <body>
      
        <Main />
        
        <NextScript />
     <script
            src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
            async
            defer
          />
      </body>
    </Html>
  )
}
