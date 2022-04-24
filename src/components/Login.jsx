import React, { useState } from "react";

const Login = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const logged = JSON.parse(localStorage.getItem("logged")) || true;

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
      localStorage.setItem("logged", JSON.stringify(logged));
      alert("Bienvenido");
    }
    // SI NO EXISTE EL USUARIO MANDO UN MENSAJE DE ERROR
    else {
      alert("Verifique si su correo y contraseña son correctos, o crear una cuenta");
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
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su correo"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={loginData.password}
            onChange={handleChange}
          />
          <button type="submit">Ingresar</button>
          <button onClick={handleRegister}>Registrarse</button>
        </form>
      ) : (
        <form>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ingrese su nombre"
            value={loginData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su correo"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={loginData.password}
            onChange={handleChange}
          />
          <button onClick={handleSubmitRegister}>Registrarse</button>
          <button onClick={handleRegister}>Ingresar</button>
        </form>
      )}
    </section>
  );
};

export default Login;
