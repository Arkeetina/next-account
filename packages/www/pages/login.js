import Head from 'next/head';
import Login from '../components/Login';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
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
        <Login />
      </div>
    </div>
  );
};

export default Home;
