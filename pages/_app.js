import { useRouter } from 'next/router';
import { ApolloProvider } from '@apollo/client';
import { useEffect } from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import client from '../lib/apolloConfig';
import '../styles/nprogress.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const handleRouterChange = () => { NProgress.start() }
  const handleRouterStop = () => { NProgress.done() }

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouterChange);
    router.events.on('routeChangeComplete', handleRouterStop);
    router.events.on('routeStopError', handleRouterChange);

    return () => {
      router.events.off('routeChangeStart', handleRouterChange);
      router.events.off('routeChangeComplete', handleRouterStop);
      router.events.off('routeStopError', handleRouterChange);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Manejo de datos catastrales de los municipios de Colombia' />
      </Head>

      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default MyApp

