import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/browse/normalize.css@8.0.1/normalize.css" type="text/css" />
        <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura.css" type="text/css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
