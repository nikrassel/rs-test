import React from "react";

type InfoObject = {
  key: string;
  name: string;
  children: InfoObject[];
};

type ChildComponentProps = {
  info: InfoObject;
};

const ChildComponent: React.FC<ChildComponentProps> = ({ info }) => {
  if (info.children.length !== 0) {
    return (
      <>
        <ul>
          {info.children.map((elem) => (
            <li>{elem.name}</li>
          ))}
        </ul>
      </>
    );
  }
  return <h3>У данного раздела нет дочерних элементов</h3>;
};

export default ChildComponent;
