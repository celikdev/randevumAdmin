import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookie] = useCookies(["loggedIn"]);

  const handleLogin = () => {
    if (
      email == process.env.REACT_APP_ADMIN_EMAIL &&
      password == process.env.REACT_APP_ADMIN_PASSWORD
    ) {
      setCookie("loggedIn", true);
      navigate("/dashboard");
    } else {
      alert("Please Check Valids");
    }
  };

  useEffect(() => {
    if (cookies.loggedIn) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <div className="flex flex-col items-center py-24 gap-8 font-Montserrat">
      <div className="flex flex-col gap-4 items-center">
        <img
          className="w-40"
          src="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/logo-hakan.png?alt=media&token=5a4a56b9-9243-4fb2-8d49-d04ce69f94e4"
          alt="left-bar-logo"
        />
        <h1 className="text-textColor font-bold text-xl">Admin</h1>
      </div>
      <div className="flex flex-col gap-4 items-center bg-boxColor px-16 pb-16 py-8 rounded-lg filter drop-shadow-2xl">
        <h1 className="text-textColor font-bold text-xl">Giriş Yap</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 w-64 focus:border-borderAndOtherRed hover:border-borderAndOtherRed transition-colors duration-300 rounded-lg py-2 px-2 text-sm font-semibold outline-none"
          placeholder="E-Posta"
        />
        <input
          type="password"
          value={password}
          onKeyPress={(e) =>
            e.key === "Enter"
              ? !email || !password
                ? null
                : handleLogin()
              : null
          }
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 w-64 focus:border-borderAndOtherRed hover:border-borderAndOtherRed transition-colors duration-300 rounded-lg py-2 px-2 text-sm font-semibold outline-none"
          placeholder="Şifre"
        />
        <button
          onClick={() => handleLogin()}
          disabled={!email || !password}
          className="w-1/2 border-2 disabled:bg-disabledColor disabled:border-transparent disabled:text-textColor border-borderAndOtherRed rounded-lg py-2 text-sm font-semibold text-textColor transition-colors duration-300 hover:bg-textColor hover:border-transparent hover:text-background"
        >
          Giriş Yap
        </button>
      </div>
    </div>
  );
};

export default Login;
