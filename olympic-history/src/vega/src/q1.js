import {BaseObject, copy, get, init, set} from './__util__';

class Q1 extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    set(this, "op", "q1");
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

  order(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "order", value);
      return obj;
    } else {
      return get(this, "order");
    }
  }

}

export function q1(...args) {
  return new Q1(...args);
}