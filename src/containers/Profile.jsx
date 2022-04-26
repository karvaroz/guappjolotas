import React from "react";
import { ProfileBox } from "../styles/profileStyles";
import { BtnPay } from "../styles/selectFoodStyles";


const Profile = () => {
  return (
    <section>
      <ProfileBox>
        <h1>Profile</h1>
        <img src="/icons/user.png" alt="user" />
        <h3>Nombre Registrado:</h3>
        <p>Nombre</p>
        <h3>Email Registrado:</h3>
        <p>email@email.com</p>
      </ProfileBox>
      <BtnPay>Regresar</BtnPay>
    </section>
  );
};

export default Profile;
