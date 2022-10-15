import {BaseObject, copy, get, init, set} from './__util__';

class Lag extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    set(this, "op", "lag");
    if (args[0] !== undefined) set(this, "field", args[0]);
    if (args[1] !== undefined) set(this, "param", args[1]);
    if (args[2] !== undefined) set(this, "as", args[2]);
  }

  as(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "as", value);
      return obj;
    } else {
      return get(this, "as");
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

  op(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "op", value);
      return obj;
    } else {
      return get(this, "op");
    }
  }

  param(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "param", value);
      return obj;
    } else {
      return get(this, "param");
    }
  }

}

export function lag(...args) {
  return new Lag(...args);
}