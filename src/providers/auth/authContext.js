import React, { createContext, useState } from 'react';
import hostServices from '../../services/hostServices.js';
import { setAuth, signOut } from '../../config/auth.js';
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    name: null,
    email: null,
  });

  const logIn = async (data) => {
    const result = await hostServices.getSignIn(data);

    const { token, name, id, email } = result.data;
    setUser({ ...user, name: name, id: id, email: email });
    setAuth({ name: name, id: id, email: email, token: token });
  };

  const logOut = () => {
    setUser({ ...user, id: null, name: null, email: null });
    signOut();
  };

  const refreshGetStorage = (data) => {
    const { name, id, email } = data;
    setUser({ ...user, name: name, id: id, email: email });
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut, refreshGetStorage }}>
      {children}
    </AuthContext.Provider>
  );
};
