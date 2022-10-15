import {BaseObject, copy, get, init, set} from './__util__';

class Encoding extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "encoding", args[0]);
  }

  order(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "encoding", value);
      return obj;
    } else {
      return get(this, "encoding");
    }
  }

}

export function encoding(...args) {
  return new Encoding(...args);
}