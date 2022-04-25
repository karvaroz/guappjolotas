import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BtnLogin, FormImg, FormInput, FormWrapper } from "../styles/formStyles";

const Login = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [isLogin, setIsLogin] = useState(true);

  // MANEJO DEL ENVIO DEL FORMULARIO DE INGRESO DE SESION -BUSCO SI COINCIDE EL EMAIL Y EL PASSWORD
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );
    // SI EL USUARIO ES EXISTE LO MANDO AL LOCAL STORAGE PARA QUE SE GUARDE Y CAMBIO EL ESTADO A TRUE
    if (user) {
      setIsLogin(true);
      navigate("/categories");
    }
    // SI NO EXISTE EL USUARIO MANDO UN MENSAJE DE ERROR
    else {
      alert(
        "Verifique si su correo y contraseña son correctos, o crear una cuenta"
      );
    }
  };

  // GUARDAR LOS DATOS DEL FORMULARIO DE INGRESO DE SESION
  const handleChange = ({ target }) => {
    setLoginData({
      ...loginData,
      [target.name]: target.value,
    });
  };

  // MANEJO DEL REGISTRO CAMBIO EL ESTADO DE LOGUEADO A TRUE
  const handleRegister = () => {
    setIsLogin(!isLogin);
  };

  // MANEJO DEL REGISTRO CAMBIO EL ESTADO DE LOGUEADO A TRUE
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    users.push(loginData);
    localStorage.setItem("users", JSON.stringify(users));
    setLoginData({ email: "", password: "", name: "" });
    setIsLogin(true);
  };

  return (
    <section>
      {isLogin ? (
        <FormWrapper onSubmit={handleSubmit}>
          <FormImg src="/images/logo.png" alt="logo" />
          <FormInput
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su correo"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          <FormInput
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={loginData.password}
            onChange={handleChange}
          />
          <BtnLogin type="submit">Ingresar</BtnLogin>
          <BtnLogin onClick={handleRegister}>Registrarse</BtnLogin>
        </FormWrapper>
      ) : (
        <FormWrapper>
          <FormImg src="/images/logo.png" alt="logo" />
          <FormInput
            type="text"
            id="name"
            name="name"
            placeholder="Ingrese su nombre"
            value={loginData.name}
            onChange={handleChange}
            required
          />
          <FormInput
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su correo"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          <FormInput
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={loginData.password}
            onChange={handleChange}
          />
          <BtnLogin onClick={handleSubmitRegister}>Registrarse</BtnLogin>
          <BtnLogin onClick={handleRegister}>Ingresar</BtnLogin>
        </FormWrapper>
      )}
    </section>
  );
};

export default Login;
