import React from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import API from "../api";
import ParentComponent from "../components/Info/parentComponents";
import ChildComponent from "../components/Info/childComponent";

// type InfoProps = {
//   key: string;
//   name: string;
//   children: InfoProps[];
// };

const BrowseInfo = () => {
  const navigate = useNavigate();
  const [info, setInfo] = React.useState<any>();
  const [branch, setBranch] = React.useState<any>();
  const context = React.useContext(UserContext);
  React.useEffect(() => {
    if (context?.userStatus !== "authorized") {
      navigate("/login");
    }
  }, [context, navigate]);
  React.useEffect(() => {
    API.data.fetchAll().then((data) => setInfo(data));
  }, []);
  function handleChoose(
    key: string,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) {
    event.stopPropagation();
    API.data.fetchChildren(key).then((data) => setBranch(data));
  }
  console.log(branch);
  return (
    <div>
      <h1>Browse Info</h1>
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
