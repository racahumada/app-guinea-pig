import React from 'react';
import { useForm } from 'react-hook-form';
import hostServices from '../services/hostServices.js';
import './signup.css';

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const dataTest = await hostServices.postSignUp(data);
    console.log(dataTest);
  };

  return (
    <div className="boxSignup">
      <div className="logo">
        <img src="./img/guinea-pig-head.png" alt="Logo Guinea App" />
      </div>
      <h3>CADASTRO</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="boxForm">
        <label>Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Seu Nome"
          ref={register({ required: true })}
        />
        {errors.name && <span>Campo de nome é Obrigatório</span>}
        <label>Email:</label>
        <input
          type="text"
          name="email"
          placeholder="example@guinea.com"
          ref={register({ required: true })}
        />
        {errors.email && <span>Campo de email é obrigatório</span>}
        <label>Senha:</label>
        <input
          type="password"
          name="password"
          placeholder="**********"
          ref={register({ required: true })}
        />
        {errors.password && <span>Campo de senha obrigatório</span>}
        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default SignUp;
