import React from "react";

type InfoObject = {
  key: string;
  name: string;
  children?: InfoObject[];
};

type ParentComponentProps = {
  info: InfoObject;
  chosenBranch?: string;
  method: (
    key: string,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => void;
};

const Branch: React.FC<ParentComponentProps> = ({
  info,
  method,
  chosenBranch,
}) => {
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
