"use client";
import React from "react";

const RegisterForm: React.FC = () => {
  return (
    <form className="tp-register-form">
      <div>
        <label>Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
