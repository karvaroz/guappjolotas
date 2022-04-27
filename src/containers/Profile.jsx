import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProfileBox } from "../styles/profileStyles";
import { BtnPay } from "../styles/selectFoodStyles";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  console.log(user);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("users"));

    if (user) {
      setUser(user[0]);
    }
  }, []);

  return (
    <section>
      <ProfileBox>
        <h1>Profile</h1>
        <img src="/icons/user.png" alt="user" />
        <h3>Nombre Registrado:</h3>
        <p>{user.name} </p>
        <h3>Email Registrado:</h3>
        <p>{user.email} </p>
      </ProfileBox>
      <Link to={"/categories"}>
        <BtnPay>Regresar</BtnPay>
      </Link>
    </section>
  );
};

export default Profile;
