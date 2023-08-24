import React from "react";
import { UserContext } from "../App";

const Main = () => {
  const context = React.useContext(UserContext);
  return (
    <>
      {context?.userStatus === "authorized" ? (
        <div>
          <h1>Добро пожаловать, администратор!</h1>
          <h3>Вы можете приступить к работе</h3>
        </div>
      ) : (
        <div>
          <h1>Приветствуем Вас в нашем приложении!</h1>
          <h3>
            Для просмотра основной информации вам необходимо пройти авторизацию
          </h3>
        </div>
      )}
    </>
  );
};

export default Main;
