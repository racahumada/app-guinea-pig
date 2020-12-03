import React, { useContext } from 'react';
import { AuthContext } from '../../../../../providers/auth/authContext';
import hostServices from '../../../../../services/hostServices.js';

import {
  WrapperForm,
  TitleForm,
  BoxForm,
  LabelForm,
  InputForm,
  SelectForm,
} from './style';
import { useForm } from 'react-hook-form';

export default function FormAddPdi() {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const { name, birthday, gender, pelage } = data;
    const { id } = user;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('birthday', birthday);
    formData.append('gender', gender);
    formData.append('pelage', pelage);
    formData.append('userId', id);
    formData.append('picture', data.fotoperfil[0]);
    const result = await hostServices.postNewPdi(formData);
    console.log('Result newPdi', result);
  };

  return (
    <WrapperForm>
      <TitleForm>ADICIONAR NOVO PDI</TitleForm>
      <BoxForm onSubmit={handleSubmit(onSubmit)}>
        <LabelForm>Nome</LabelForm>
        <InputForm
          name="name"
          type="text"
          placeholder="Nome do Pig"
          ref={register({ required: true })}
        />
        {errors.name && <span>Campo de nome é Obrigatório</span>}
        <LabelForm>Nascimento</LabelForm>
        <InputForm
          name="birthday"
          type="date"
          ref={register({ required: true })}
        />
        {errors.nascimento && <span>Campo de nascimento é Obrigatório</span>}
        <LabelForm>Sexo</LabelForm>
        <SelectForm name="gender" ref={register({ required: true })}>
          <option></option>
          <option value="femea">Fêmea</option>
          <option value="macho">Macho</option>
        </SelectForm>
        {errors.sexo && <span>Campo de sexo é Obrigatório</span>}
        <LabelForm>Pelagem</LabelForm>
        <SelectForm name="pelage" ref={register({ required: true })}>
          <option></option>
          <option value="ingles">Inglês</option>
          <option value="peruano">Peruano</option>
          <option value="coronet">Coronet</option>
          <option value="abissinio">Abissínio</option>
          <option value="Sheltie">Sheltie</option>
          <option value="rex">Rex</option>
          <option value="himalaio">Himalaio</option>
          <option value="teddy">Teddy</option>
          <option value="alpaca">Alpaca</option>
          <option value="coroado-ingles">Coroado Inglês</option>
          <option value="ridgeback">Ridgeback</option>
          <option value="skinny">Skinny</option>
          <option value="coroado-ingles">Coroado Inglês</option>
          <option value="outro">Outro</option>
        </SelectForm>
        {errors.pelagem && <span>Campo de pelagem é Obrigatório</span>}
        <LabelForm>Foto de Perfil</LabelForm>
        <InputForm name="fotoperfil" type="file" ref={register} />
        {errors.fotoPerfil && <span>Campo de nascimento é Obrigatório</span>}
        <button>Salvar</button>
      </BoxForm>
    </WrapperForm>
  );
}
