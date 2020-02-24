import netlifyIdentity from 'netlify-identity-widget';

const Login = () => {
  const handleLogin = () => {
    netlifyIdentity.open();
  };
  return (
    <div>
      <div>
        <div className="layout">
          <div className="form-container">
            <div>
              <h1>Login</h1>
            </div>
            <button onClick={() => handleLogin()}>Log in</button>
          </div>
        </div>
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
          align-items: center;
          flex-direction: column;
        }
        .width-100 {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Login;
