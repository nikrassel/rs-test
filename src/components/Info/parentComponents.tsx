import React from "react";
import "./index.css";
import Branch from "./branch";

type InfoObject = {
  key: string;
  name: string;
  children: InfoObject[];
};

type ParentComponentProps = {
  info: InfoObject;
  chosenBranch?: string;
  method: (
    key: string,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => void;
};

const ParentComponent: React.FC<ParentComponentProps> = ({
  info,
  method,
  chosenBranch,
}) => {
  return (
    <ul className="tree">
      <li>
        <details open>
          <summary>{info.name}</summary>
          <ul>
            {info.children.map((elem: InfoObject) => (
              <Branch
                key={elem.key}
                info={elem}
                method={method}
                chosenBranch={chosenBranch}
              ></Branch>
            ))}
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default ParentComponent;
