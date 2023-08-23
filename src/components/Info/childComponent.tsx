import React from "react";
import TextField from "../form/textField";

type InfoObject = {
  key: string;
  name: string;
  children: InfoObject[];
};

type ChildComponentProps = {
  info: InfoObject;
};

const ChildComponent: React.FC<ChildComponentProps> = ({ info }) => {
  const [search, setSearch] = React.useState("");
  if (info.children.length !== 0) {
    let filtredInfo = [...info.children];
    if (search) {
      const nameRegExp = new RegExp(`(?:${search.toLowerCase()})`, "g");
      filtredInfo = filtredInfo.filter((info) =>
        nameRegExp.test(info.name.toLowerCase())
      );
    }
    console.log(filtredInfo);
    return (
      <>
        <TextField
          label=""
          name="search"
          value={search}
          onChange={setSearch}
          placeHolder="Поиск..."
        />
        <ul>
          {filtredInfo.map((elem) => (
            <li key={elem.key}>{elem.name}</li>
          ))}
        </ul>
      </>
    );
  }
  return <h3>У данного раздела нет дочерних элементов</h3>;
};

export default ChildComponent;
