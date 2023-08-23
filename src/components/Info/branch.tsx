import React from "react";

type InfoObject = {
  key: string;
  name: string;
  children?: InfoObject[];
};

type ParentComponentProps = {
  info: InfoObject;
};

const Branch: React.FC<ParentComponentProps> = ({ info }) => {
  if (info.children) {
    return (
      <li>
        {info.name}
        {info.children && (
          <ul>
            {info.children.map((elem: InfoObject) => (
              <Branch key={elem.key} info={elem}></Branch>
            ))}
          </ul>
        )}
      </li>
    );
  }
  return null;
};

export default Branch;
