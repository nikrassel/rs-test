import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const Login = () => {
  const [status, setStatus] = React.useState("");
  const navigate = useNavigate();
  function handleClick() {
    API.login.login("admin", "admin").then((data: unknown) => {
      if (data === "success") setStatus(data);
    });
  }
  React.useEffect(() => {
    if (status === "success") {
      navigate("/");
    }
  }, [status, navigate]);
  React.useEffect(() => {
    if (localStorage.getItem("status") === "authorized") {
      navigate("/");
    }
  }, [navigate]);
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
