import Router from 'next/router';
import { useContext, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import Head from 'next/head';
import { IdentityContext } from './IdentityContext';

const Home = () => {
  const { user } = useContext(IdentityContext);
  useEffect(() => {
    netlifyIdentity.init({});
    if (user) {
      Router.push('/profile');
    } else {
      Router.push('/login');
    }
  });
  return (
    <div>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
        />

        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css"
        />

        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.css"
        />
      </Head>
    </div>
  );
};

export default Home;
