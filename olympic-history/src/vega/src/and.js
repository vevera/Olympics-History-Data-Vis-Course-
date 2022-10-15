import {BaseObject, flat, init, set} from './__util__';

class And extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    args = flat(args);
    set(this, "and", args);
  }

}

export function and(...args) {
  return new And(...args);
}