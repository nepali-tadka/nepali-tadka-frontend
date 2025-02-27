import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

import Button from "../../components/button/button";
import InputField from "../../components/input-field/input-field";
import { useAuth } from "../../context/auth.context";
import { signInUser } from "../../services/auth.service";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { authenticated, signIn } = useAuth();

  useEffect(() => {
    if (authenticated) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await signInUser({ username, password });
      signIn(token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <InputField
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" className="login-form__submit">
          Login
        </Button>

        <p>
          Need an account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
