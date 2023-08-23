import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import BrowseInfo from "./pages/browseInfo";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import Navbar from "./components/Navbar/navbar";
import "./index.css";

type ContextProps = {
  userStatus: string;
  setUserStatus: (status: string) => void;
};

export const UserContext = React.createContext<ContextProps | null>(null);
function App() {
  const [userStatus, setUserStatus] =
    React.useState<ContextProps["userStatus"]>("unauthorized");
  React.useEffect(() => {
    if (localStorage.getItem("status") === "authorized") {
      setUserStatus("authorized");
    }
  }, []);
  return (
    <>
      <UserContext.Provider value={{ userStatus, setUserStatus }}>
        <Navbar />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/browse" element={<BrowseInfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
