import { useState } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';

import LoginForm from '../components/LoginForm';
const Home = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value);
  };
  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleLogin = () => {
    router.push('/profile');
  };
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
      <div className="layout">
        <div>
          <h1>Login</h1>
        </div>
        <LoginForm
          onEmailChange={handleChangeEmail}
          email={email}
          password={password}
          onPasswordChange={handleChangePassword}
          onLogin={handleLogin}
        />
      </div>
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .form-container {
          width: 22rem;
          display: flex;
          flex-direction: column;
        }
        .width-100 {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Home;
