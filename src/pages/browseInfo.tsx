import React from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const BrowseInfo = () => {
  const navigate = useNavigate();
  const context = React.useContext(UserContext);
  React.useEffect(() => {
    if (context?.userStatus !== "authorized") {
      navigate("/login");
    }
  }, [context, navigate]);
  return <h1>Browse Info</h1>;
};

export default BrowseInfo;
