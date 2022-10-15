import {BaseObject, copy, flat, get, init, set} from './__util__';

class Bin extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "field", args[0]);
    set(this, "bin", args[1] !== undefined ? args[1] : true);
  }

  as(...value) {
    if (arguments.length) {
      const obj = copy(this);
      if (value.length === 1 && !Array.isArray(value[0])) {
        value = value[0];
      } else {
        value = flat(value);
      }
      set(obj, "as", value);
      return obj;
    } else {
      return get(this, "as");
    }
  }

  bin(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "bin", value);
      return obj;
    } else {
      return get(this, "bin");
    }
  }

  field(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
      return obj;
    } else {
      return get(this, "field");
    }
  }

}

export function bin(...args) {
  return new Bin(...args);
}