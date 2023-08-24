import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { UserContext } from "../App";
import TextField from "../components/form/textField";
import ToastComponent from "../components/common/toastComponent";

const Login = () => {
  const context = React.useContext(UserContext);
  const navigate = useNavigate();
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    API.authService.login(userName, password).then((data: unknown) => {
      if (typeof data === "string") context?.setUserStatus(data);
    });
  }
  React.useEffect(() => {
    if (context?.userStatus === "authorized") {
      navigate("/");
    } else if (context?.userStatus === "error") {
      context?.setUserStatus("await");
    }
  }, [context, navigate]);
  return (
    <>
      <h1>Страница авторизации</h1>
      <ToastComponent
        toastText="Введен неверный логин и/или пароль"
        toastShow={context?.userStatus === "error" ? true : false}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 p-4">
            <form onSubmit={(event) => handleLogin(event)}>
              <TextField
                label="Имя пользователя"
                name="user-name"
                value={userName}
                onChange={setUserName}
              />
              <TextField
                label="Пароль"
                name="password"
                type="password"
                value={password}
                onChange={setPassword}
              />
              <button className="btn btn-primary w-100 mx-auto">Войти</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
