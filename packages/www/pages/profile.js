import { useContext, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import netlifyIdentity from 'netlify-identity-widget';

import { IdentityContext } from './IdentityContext';
import ProfilePage from '../components/Profile';

const Account = () => {
  const { user } = useContext(IdentityContext);
  useEffect(() => {
    netlifyIdentity.init({});
    if (!user) {
      Router.push('/login');
    }
  });
  return (
    <div>
      <Head>
        <title>Profile</title>
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
      <div>
        <ProfilePage user={user} />
      </div>
    </div>
  );
};

export default Account;
