import {BaseObject, copy, flat, get, init, set} from './__util__';

class Fold extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    args = flat(args);
    set(this, "fold", args);
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

  fold(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "fold", value);
      return obj;
    } else {
      return get(this, "fold");
    }
  }

}

export function fold(...args) {
  return new Fold(...args);
}