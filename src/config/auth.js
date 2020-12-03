const authApp = 'guineaAuth';

export const isAuth = () => {
  return JSON.parse(localStorage.getItem(authApp));
};

export const setAuth = (data) => {
  data = JSON.stringify(data);
  localStorage.setItem(authApp, data);
};

export const signOut = () => {
  localStorage.removeItem(authApp);
};
