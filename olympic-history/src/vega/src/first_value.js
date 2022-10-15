import {BaseObject, copy, get, init, set} from './__util__';

class First_value extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    set(this, "op", "first_value");
    if (args[0] !== undefined) set(this, "field", args[0]);
    if (args[1] !== undefined) set(this, "as", args[1]);
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

export function first_value(...args) {
  return new First_value(...args);
}