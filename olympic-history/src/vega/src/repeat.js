import {BaseObject, copy, get, init, set} from './__util__';

class Repeat extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "repeat", args[0]);
  }

  repeat(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "repeat", value);
      return obj;
    } else {
      return get(this, "repeat");
    }
  }

}

export function repeat(...args) {
  return new Repeat(...args);
}