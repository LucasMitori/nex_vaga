import {
  DataSpaceInput,
  LoginForm,
  LoginInfo,
  LoginSpace,
  RegisterBtn,
} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import FloatUp from "../../components/Animations/FloatUp/FloatUp";

const LoginPage = () => {
  const { LoginUser } = useContext(GeneralContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "Deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
      )
      .required("escolha uma senha"),
    confirmPassword: yup.string().required("Senha obrigatória"),
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
      <LoginSpace>
        <LoginInfo>
          <LoginForm onSubmit={handleSubmit(LoginUser)}>
            <h2>Login</h2>
            <DataSpaceInput>
              <label>Email</label>
              <input
                type="email"
                id="email"
                placeholder="Seu e-mail"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
            </DataSpaceInput>
            <DataSpaceInput>
              <label>Senha</label>
              <input
                type="password"
                id="password"
                autoComplete="on"
                placeholder="Sua senha"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
            </DataSpaceInput>
            <button type="submit">Entrar</button>
          </LoginForm>
          <span>Ainda não possui uma conta?</span>

          <RegisterBtn to={`/register`}>Cadastre-se</RegisterBtn>
        </LoginInfo>
      </LoginSpace>
      <FloatUp />
    </>
  );
};

export default LoginPage;
