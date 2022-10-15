import {BaseObject, copy, flat, get, init, set} from './__util__';

class Lookup extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "lookup", args[0]);
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

  default(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "default", value);
      return obj;
    } else {
      return get(this, "default");
    }
  }

  from(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "from", value);
      return obj;
    } else {
      return get(this, "from");
    }
  }

  lookup(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "lookup", value);
      return obj;
    } else {
      return get(this, "lookup");
    }
  }

}

export function lookup(...args) {
  return new Lookup(...args);
}