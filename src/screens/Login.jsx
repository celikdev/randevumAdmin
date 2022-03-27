import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, []);
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
