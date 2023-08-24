import React from "react";
import { InfoObject, InfoProps } from "../../models";

const Branch: React.FC<InfoProps> = ({ info, method, chosenBranch }) => {
  if (info.children) {
    return (
      <li onClick={(event) => method(info.key, event)}>
        <span className={info.key === chosenBranch ? "branch" : ""}>
          {info.name}
        </span>

        {info.children && (
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
        )}
      </li>
    );
  }
  return null;
};

export default Branch;
