import React from 'react';
import { useForm } from 'react-hook-form';
import css from './login.module.css';

const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  //
  const onSubmit = (data) => console.log(data);

  console.log(watch('email'));
  return (
    <div className={css.boxLogin}>
      <div className={css.logo}>
        <img src="./guinea-pig-heag.png" alt="Logo" />
      </div>
      <h3>LOGIN</h3>
      <form onSubmit={handleSubmit(onSubmit)} className={css.boxForm}>
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
