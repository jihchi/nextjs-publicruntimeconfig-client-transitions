import type { AppProps } from 'next/app'
// import type { AppContext } from 'next/app'
// import App from "next/app"
// import getConfig from 'next/config';

// const { publicRuntimeConfig } = getConfig();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   return {
//     ...appProps,
//     imageUrlFromApp: publicRuntimeConfig?.imageUrl ?? '<undefined>',
//   };
// }

export default MyApp;
