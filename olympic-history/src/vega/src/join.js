import {BaseObject, copy, flat, get, init, set} from './__util__';

class Join extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    args = flat(args);
    set(this, "joinaggregate", args);
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

  joinaggregate(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "joinaggregate", value);
      return obj;
    } else {
      return get(this, "joinaggregate");
    }
  }

}

export function join(...args) {
  return new Join(...args);
}