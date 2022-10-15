import {BaseObject, copy, flat, get, init, set} from './__util__';

class Aggregate extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    args = flat(args);
    set(this, "aggregate", args);
  }

  aggregate(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "aggregate", value);
      return obj;
    } else {
      return get(this, "aggregate");
    }
  }

  groupby(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "groupby", value);
      return obj;
    } else {
      return get(this, "groupby");
    }
  }

}

export function aggregate(...args) {
  return new Aggregate(...args);
}