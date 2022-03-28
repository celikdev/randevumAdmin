import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const LeftBar = () => {
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(["loggedIn"]);

  const handleLogout = () => {
    removeCookie("loggedIn");
    navigate("/");
  };

  return (
    <div className="bg-boxColor h-screen w-72 gap-16 rounded-r-2xl shadow-xl flex flex-col items-center py-10">
      <img
        className="w-2/4"
        src="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/logo-hakan.png?alt=media&token=5a4a56b9-9243-4fb2-8d49-d04ce69f94e4"
        alt="left-bar-logo"
      />
      <div className="flex flex-col gap-4 py-6 bg-background rounded-lg w-11/12 items-center">
        <button
          onClick={() => navigate("/dashboard")}
          className="w-3/4 bg-boxColor transition-colors duration-300 hover:bg-textColor group py-3 rounded-lg shadow-lg"
        >
          <h1 className="font-Montserrat font-semibold text-sm text-textColor transition-colors duration-300 group-hover:text-boxColor">
            Anasayfa
          </h1>
        </button>
        <button
          onClick={() => navigate("/dashboard/users")}
          className="w-3/4 bg-boxColor transition-colors duration-300 hover:bg-textColor group py-3 rounded-lg shadow-lg"
        >
          <h1 className="font-Montserrat font-semibold text-sm text-textColor transition-colors duration-300 group-hover:text-boxColor">
            Kullanıcılar
          </h1>
        </button>
      </div>
      <button
        onClick={() => handleLogout()}
        className="w-8/12 bg-borderAndOtherRed py-2 rounded transition-colors duration-300 hover:bg-textColor hover:text-borderAndOtherRed  text-sm font-Montserrat font-semibold text-textColor"
      >
        Çıkış Yap
      </button>
    </div>
  );
};

export default LeftBar;
