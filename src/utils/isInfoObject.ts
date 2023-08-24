import { InfoObject } from "../models";

function isInfoObject(obj: any): obj is InfoObject {
  return typeof obj.key === "string" && typeof obj.name === "string";
}

export default isInfoObject;
