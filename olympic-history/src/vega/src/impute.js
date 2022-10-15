import {BaseObject, copy, flat, get, init, set} from './__util__';

class Impute extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "impute", args[0]);
    if (args[1] !== undefined) set(this, "key", args[1]);
  }

  frame(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "frame", value);
      return obj;
    } else {
      return get(this, "frame");
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

  impute(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "impute", value);
      return obj;
    } else {
      return get(this, "impute");
    }
  }

  key(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "key", value);
      return obj;
    } else {
      return get(this, "key");
    }
  }

  keyvals(...value) {
    if (arguments.length) {
      const obj = copy(this);
      if (value.length === 1 && !Array.isArray(value[0])) {
        value = value[0];
      } else {
        value = flat(value);
      }
      set(obj, "keyvals", value);
      return obj;
    } else {
      return get(this, "keyvals");
    }
  }

  method(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "method", value);
      return obj;
    } else {
      return get(this, "method");
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

export function impute(...args) {
  return new Impute(...args);
}