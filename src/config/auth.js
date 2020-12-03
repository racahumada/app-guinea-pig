const tokenApp = 'guineaToken';
export const isAuth = () => {
  return localStorage.getItem(tokenApp);
};

export const setToken = (token) => {
  localStorage.setItem(tokenApp, token);
};

export const signOut = () => {
  localStorage.removeItem(tokenApp);
};
