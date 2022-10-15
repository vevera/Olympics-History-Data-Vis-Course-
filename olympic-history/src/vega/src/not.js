import {BaseObject, init, set} from './__util__';

class Not extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "not", args[0]);
  }

}

export function not(...args) {
  return new Not(...args);
}