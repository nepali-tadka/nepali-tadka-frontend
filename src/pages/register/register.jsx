import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import Button from "../../components/button/button";
import InputField from "../../components/input-field/input-field";
import { signUp } from "../../services/auth.service";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    address: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signUp(formData);
      toast.success("Account created successfully. Proceed to login.");
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
      setError(error.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <InputField
          label="First Name"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
        <InputField
          label="Last Name"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        <InputField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <InputField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;
