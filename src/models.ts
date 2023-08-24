export type InfoObject = {
  key: string;
  name: string;
  children?: InfoObject[];
};

export type InfoProps = {
  info: InfoObject;
  chosenBranch?: string;
  method: (
    key: string,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => void;
};
