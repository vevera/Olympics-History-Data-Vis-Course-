import {BaseObject, copy, flat, get, init, set} from './__util__';

class Pivot extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "pivot", args[0]);
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

  limit(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "limit", value);
      return obj;
    } else {
      return get(this, "limit");
    }
  }

  op(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "op", value);
      return obj;
    } else {
      return get(this, "op");
    }
  }

  pivot(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "pivot", value);
      return obj;
    } else {
      return get(this, "pivot");
    }
  }

  value(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "value", value);
      return obj;
    } else {
      return get(this, "value");
    }
  }

}

export function pivot(...args) {
  return new Pivot(...args);
}