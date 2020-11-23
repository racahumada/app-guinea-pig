import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import hostServices from '../../services/hostServices.js';
import { setToken } from '../../config/auth.js';
import './login.css';

const Login = () => {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const result = await hostServices.getSignIn(data);
    const { token } = result.data;
    setToken(token);
    history.push('/dashboard');
  };

  return (
    <div className="boxLogin">
      <div className="logo">
        <img src="./img/guinea-pig-head.png" alt="Logo" />
      </div>
      <h3>LOGIN</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="boxForm">
        <label>Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="example@guinea.com"
          ref={register({ required: true })}
        />
        {errors.email && <span>Campo de email obrigatório.</span>}

        <label>Senha:</label>
        <input
          type="password"
          name="password"
          placeholder="**********"
          ref={register({ required: true })}
        />
        {errors.password && <span>Campo de senha obrigatório.</span>}

        <button>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
