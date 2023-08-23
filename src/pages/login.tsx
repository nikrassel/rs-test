import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { UserContext } from "../App";

const Login = () => {
  const context = React.useContext(UserContext);
  const navigate = useNavigate();
  function handleClick() {
    API.login.login("admin", "admin").then((data: unknown) => {
      if (typeof data === "string") context?.setUserStatus(data);
    });
  }
  React.useEffect(() => {
    if (context?.userStatus === "authorized") {
      navigate("/");
    }
  }, [context, navigate]);
  return (
    <>
      <h1>Login page</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleClick()}
      >
        Войти
      </button>
    </>
  );
};

export default Login;
