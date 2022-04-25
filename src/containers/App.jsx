import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import Categories from './Categories';
import Login from './Login';
import Profile from './Profile';
import Search from './Search';
import SelectFood from './SelectFood';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/select-food" element={<SelectFood />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/search" element={<Search />} />
      <Route path="/*" element={<Navigate to="/" replace="/" />} />
    </Routes>
  );
}

export default App