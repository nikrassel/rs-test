import React from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import API from "../api";
import ParentComponent from "../components/Info/parentComponents";
import ChildComponent from "../components/Info/childComponent";

type InfoObject = {
  key: string;
  name: string;
  children: InfoObject[];
};

function isInfoObject(obj: any): obj is InfoObject {
  return typeof obj.key === "string" && typeof obj.name === "string";
}

const BrowseInfo = () => {
  const navigate = useNavigate();
  const [info, setInfo] = React.useState<InfoObject | undefined>();
  const [branch, setBranch] = React.useState<InfoObject | undefined>();
  const context = React.useContext(UserContext);
  React.useEffect(() => {
    if (context?.userStatus !== "authorized") {
      navigate("/login");
    }
  }, [context, navigate]);
  React.useEffect(() => {
    API.data.fetchAll().then((data) => {
      if (isInfoObject(data)) setInfo(data);
    });
  }, []);
  function handleChoose(
    key: string,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) {
    event.stopPropagation();
    API.data.fetchChildren(key).then((data) => {
      if (isInfoObject(data)) setBranch(data);
    });
  }
  return (
    <div>
      <h1>Основная информация</h1>
      {info ? (
        <div className="row justify-content-md-center">
          <div className="col-4">
            <h2>Родительские компоненты</h2>
            <ParentComponent info={info} method={handleChoose} />
          </div>
          <div className="col-6">
            <h2>Дочерние компоненты</h2>
            {branch && <ChildComponent info={branch} />}
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default BrowseInfo;
