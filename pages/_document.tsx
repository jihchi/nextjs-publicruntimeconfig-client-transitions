// import type { DocumentContext, DocumentInitialProps } from 'next/document';
import { Html, Head, Main, NextScript } from 'next/document';
// import NextDocument from 'next/document';
// import getConfig from 'next/config';

// const { publicRuntimeConfig } = getConfig();

function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/browse/normalize.css@8.0.1/normalize.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/sakura.css/css/sakura.css"
          type="text/css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// Document.getInitialProps = async (context: DocumentContext) => {
//   const originalRenderPage = context.renderPage;

//   context.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App) => App,
//       enhanceComponent: (Component) => Component,
//     });

//   const initialProps = await NextDocument.getInitialProps(context);

//   return initialProps;
// }

export default Document;
