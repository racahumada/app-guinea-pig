import httpConnect from './connectBackEnd.js';

const getListUser = () => {
  return httpConnect.get('/listusers');
}

const postSignUp = (data) => {
  return httpConnect.post('/signup', data);
}

const getSignIn = (data) => {
  console.log(data);

  const {email, password} = data;
  const token =  Buffer.from(`${email}:${password}`, 'utf-8').toString('base64');

  return httpConnect.get('/signin', {
    headers: {
      Authorization: `Basic ${token}`
    }
  });
}

export default {getListUser, postSignUp, getSignIn};