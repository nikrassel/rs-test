import React from "react";

type InfoObject = {
  key: string;
  name: string;
  children?: InfoObject[];
};

type ParentComponentProps = {
  info: InfoObject;
  method: (
    key: string,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => void;
};

const Branch: React.FC<ParentComponentProps> = ({ info, method }) => {
  if (info.children) {
    return (
      <li onClick={(event) => method(info.key, event)}>
        {info.name}
        {info.children && (
          <ul>
            {info.children.map((elem: InfoObject) => (
              <Branch key={elem.key} info={elem} method={method}></Branch>
            ))}
          </ul>
        )}
      </li>
    );
  }
  return null;
};

export default Branch;
