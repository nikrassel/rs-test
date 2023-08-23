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
};

const ParentComponent: React.FC<ParentComponentProps> = ({ info }) => {
  return (
    <ul className="tree">
      <li>
        <details open>
          <summary>{info.name}</summary>
          <ul>
            {info.children.map((elem: InfoObject) => (
              <Branch key={elem.key} info={elem}></Branch>
            ))}
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default ParentComponent;
