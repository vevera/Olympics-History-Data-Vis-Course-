import {BaseObject, copy, flat, get, init, set} from './__util__';

class Flatten extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    args = flat(args);
    set(this, "flatten", args);
  }

  as(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "as", value);
      return obj;
    } else {
      return get(this, "as");
    }
  }

  flatten(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "flatten", value);
      return obj;
    } else {
      return get(this, "flatten");
    }
  }

}

export function flatten(...args) {
  return new Flatten(...args);
}