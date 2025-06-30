// src/components/AuthLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
      <Footer/>
    </div>
  );
};

export default AuthLayout;
