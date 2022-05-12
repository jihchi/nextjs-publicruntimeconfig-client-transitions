import type { AppProps } from 'next/app'
// import type { AppContext } from 'next/app'
// import NextApp from "next/app"
// import getConfig from 'next/config';

// const { publicRuntimeConfig } = getConfig();

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// App.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await NextApp.getInitialProps(appContext);
//   return {
//     ...appProps,
//     imageUrlFromApp: publicRuntimeConfig?.imageUrl ?? '<undefined>',
//   };
// }

export default App;
