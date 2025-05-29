import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// A minimal layout for login/signup
const AuthLayout = () => {
  return (
    <div>
      {/* Reuse your existing navbar */}
      <Navbar />

      {/* Renders the Login or Signup component */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;

