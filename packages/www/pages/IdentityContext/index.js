import { useEffect, createContext, useState } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

export const IdentityContext = createContext({});

// exports.IdentityContext = IdentityContext;

const IdentityProvider = props => {
  const [user, setUser] = useState();

  useEffect(() => {
    netlifyIdentity.init({});
  });
  netlifyIdentity.on('login', user => {
    setUser(user);
  });
  netlifyIdentity.on('logout', () => setUser());

  return (
    <IdentityContext.Provider value={{ identity: netlifyIdentity, user }}>
      {props.children}
    </IdentityContext.Provider>
  );
};

export default IdentityProvider;
