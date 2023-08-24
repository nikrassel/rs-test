import React from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import API from "../api";
import ParentComponent from "../components/Info/parentComponents";
import ChildComponent from "../components/Info/childComponent";
import LoaderComponent from "../components/common/loaderComponent";
import isInfoObject from "../utils/isInfoObject";
import { InfoObject } from "../models";

const BrowseInfo = () => {
  const navigate = useNavigate();
  const [info, setInfo] = React.useState<InfoObject | undefined>();
  const [branch, setBranch] = React.useState<InfoObject | undefined>();
  const [branchLoading, setBranchLoading] = React.useState(false);
  const context = React.useContext(UserContext);
  React.useEffect(() => {
    if (context?.userStatus !== "authorized") {
      navigate("/login");
    }
  }, [context, navigate]);
  React.useEffect(() => {
    API.dataService.fetchAll().then((data) => {
      if (isInfoObject(data)) setInfo(data);
    });
  }, []);
  function handleChoice(
    key: string,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) {
    event.stopPropagation();
    setBranch(undefined);
    setBranchLoading(true);
    API.dataService.fetchChildren(key).then((data) => {
      if (isInfoObject(data)) setBranch(data);
      setBranchLoading(false);
    });
  }
  return (
    <div>
      <h1>Основная информация</h1>
      {info ? (
        <div className="row justify-content-md-center">
          <div className="col-4">
            <h2>Родительские компоненты</h2>
            <ParentComponent
              info={info}
              method={handleChoice}
              chosenBranch={branch ? branch.key : ""}
            />
          </div>
          <div className="col-6">
            <h2>Дочерние компоненты</h2>
            {branchLoading && <LoaderComponent />}
            {branch && <ChildComponent info={branch} />}
          </div>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
};

export default BrowseInfo;
