"use client";
import React from "react";

const LoginForm: React.FC = () => {
  return (
    <form className="tp-login-form">
      <div>
        <label>Email</label>
        <input type="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
