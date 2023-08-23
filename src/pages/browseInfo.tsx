import React from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import "./index.css";
import API from "../api";
import ParentComponent from "../components/Info/parentComponents";

// type InfoProps = {
//   key: string;
//   name: string;
//   children: InfoProps[];
// };

const BrowseInfo = () => {
  const navigate = useNavigate();
  const [info, setInfo] = React.useState<any>();
  const context = React.useContext(UserContext);
  React.useEffect(() => {
    if (context?.userStatus !== "authorized") {
      navigate("/login");
    }
  }, [context, navigate]);
  React.useEffect(() => {
    API.data.fetchAll().then((data) => setInfo(data));
  }, []);
  return (
    <div>
      <h1>Browse Info</h1>
      {info ? (
        <div className="row">
          <div className="col-4">
            <h2>Родительские компоненты</h2>
            <ParentComponent info={info} />
          </div>
          <div className="col-8">
            <h2>Дочерние компоненты</h2>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default BrowseInfo;
