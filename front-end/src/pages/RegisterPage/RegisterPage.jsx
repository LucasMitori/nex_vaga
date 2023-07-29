import {
  BackBtn,
  DataSpaceInput,
  RegisterForm,
  RegisterInfo,
  RegisterSpace,
  RegisterTitle,
} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import BallMoviment from "../../components/Animations/BallMoviment/BallMoviment";

const RegisterPage = () => {
  const { LoginUser } = useContext(GeneralContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/,
        "Deve conter 8 caraceteres, uma maiúscula, uma minúscula e um número"
      )
      .required("escolha uma senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <>
      <RegisterSpace>
        <RegisterTitle>
          <BackBtn to={"/"}>Voltar</BackBtn>
        </RegisterTitle>

        <RegisterInfo>
          <RegisterForm onSubmit={handleSubmit(LoginUser)}>
            <h2>Crie sua conta</h2>
            <h3>Rápido e grátis, vamos nessa</h3>
            <DataSpaceInput>
              <label>Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Digite aqui seu nome"
                {...register("name")}
              />
              <p>{errors.name?.message}</p>
            </DataSpaceInput>
            <DataSpaceInput>
              <label>Email</label>
              <input
                type="email"
                id="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
              .<p>{errors.email?.message}</p>
            </DataSpaceInput>
            <DataSpaceInput>
              <label>Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
            </DataSpaceInput>
            <DataSpaceInput>
              <label>Confirmar Senha</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Digite novamente sua senha"
                {...register("confirmPassword")}
              />
              <p>{errors.password?.message}</p>
            </DataSpaceInput>
            <DataSpaceInput>
              <label>Bio</label>
              <input
                type="text"
                id="describe"
                placeholder="Digite aqui uma breve descrição"
                {...register("bio")}
              />
              <p>{errors.bio?.message}</p>
            </DataSpaceInput>
            <DataSpaceInput>
              <label>Contato</label>
              <input
                type="tel"
                id="cellphone"
                placeholder="99-99999-9999"
                pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                {...register("contact")}
              />
              <p>{errors.contact?.message}</p>
            </DataSpaceInput>
            <DataSpaceInput>
              <label>Selecionar módulo</label>
              <select id="modules" {...register("course_module")}>
                <option value="1º Módulo">
                  1º Módulo(Introdução ao Frontend)
                </option>
                <option value="2º Módulo">2º Módulo(Frontend Avançado)</option>
                <option value="3º Módulo">
                  3º Módulo(Introdução ao Backend)
                </option>
                <option value="4º Módulo">4º Módulo(Backend Avançado)</option>
              </select>
            </DataSpaceInput>
            <button type="submit">Cadastrar</button>
          </RegisterForm>
        </RegisterInfo>
      </RegisterSpace>
      <BallMoviment />
    </>
  );
};

export default RegisterPage;
