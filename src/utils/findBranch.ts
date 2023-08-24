import { InfoObject } from "../models";

function findBranch(child: InfoObject, keyId: string): InfoObject | undefined {
  if (child.children) {
    for (let elem of child.children) {
      if (elem.key === keyId) {
        return elem;
      } else {
        let nextChild = findBranch(elem, keyId);
        if (nextChild) {
          return nextChild;
        }
      }
    }
  }
}

export default findBranch;
