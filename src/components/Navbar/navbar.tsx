import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarScroll">
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
            <Link to={"/login"}>
              <button className="btn btn-outline-primary">Войти</button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
