import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import API from "../../api";

const Navbar = () => {
  const context = React.useContext(UserContext);
  function handleClick() {
    API.login.logout().then((data: unknown) => {
      if (typeof data === "string") context?.setUserStatus(data);
    });
  }
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item me-2">
            <Link to={"/"}>
              <button className="btn btn-outline-primary">На главную</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/browse"}>
              <button className="btn btn-outline-primary">
                Основная информация
              </button>
            </Link>
          </li>
        </ul>
        <form className="d-flex">
          {context?.userStatus === "authorized" ? (
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => handleClick()}
            >
              Выйти
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-outline-primary">Войти</button>
            </Link>
          )}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
