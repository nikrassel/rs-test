import React from "react";
import _ from "lodash";
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
  const [sortBy, setSortBy] = React.useState<{
    onSort: boolean;
    order: "asc" | "desc";
  }>({ onSort: false, order: "asc" });
  React.useEffect(() => {
    setSearch("");
    setSortBy({ onSort: false, order: "asc" });
  }, [info]);
  function handleSort() {
    if (!sortBy.onSort || sortBy.order !== "asc") {
      setSortBy({ onSort: true, order: "asc" });
    } else {
      setSortBy({ onSort: true, order: "desc" });
    }
  }
  if (info.children.length !== 0) {
    let filtredInfo = [...info.children];
    if (search) {
      const nameRegExp = new RegExp(`(?:${search.toLowerCase()})`, "g");
      filtredInfo = filtredInfo.filter((info) =>
        nameRegExp.test(info.name.toLowerCase())
      );
    }
    if (sortBy.onSort) {
      filtredInfo = _.orderBy(filtredInfo, "name", sortBy.order);
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
        <button
          type="button"
          className="btn btn-primary mb-4"
          onClick={() => handleSort()}
        >
          {sortBy.order === "asc" ? (
            <i className="bi bi-caret-up-fill"></i>
          ) : (
            <i className="bi bi-caret-down-fill"></i>
          )}
          Сортировка
        </button>
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
