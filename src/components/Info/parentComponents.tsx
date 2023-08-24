import React from "react";
import "./index.css";
import Branch from "./branch";
import { InfoObject, InfoProps } from "../../models";

const ParentComponent: React.FC<InfoProps> = ({
  info,
  method,
  chosenBranch,
}) => {
  return (
    <ul className="tree">
      <li>
        {info.name}
        <ul>
          {info.children?.map((elem: InfoObject) => (
            <Branch
              key={elem.key}
              info={elem}
              method={method}
              chosenBranch={chosenBranch}
            ></Branch>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default ParentComponent;
