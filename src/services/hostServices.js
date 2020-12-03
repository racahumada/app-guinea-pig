import httpConnect from './connectBackEnd.js';

const getListUser = () => {
  return httpConnect.get('/listusers');
};

const postSignUp = (data) => {
  return httpConnect.post('/signup', data);
};

const getSignIn = (data) => {
  const { email, password } = data;
  const token = Buffer.from(`${email}:${password}`, 'utf-8').toString('base64');

  return httpConnect.get('/signin', {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
};

const postNewPdi = (data) => {
  return httpConnect.post('/pdi/new', data);
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { getListUser, postSignUp, getSignIn, postNewPdi };
