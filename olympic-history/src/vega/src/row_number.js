import {BaseObject, copy, get, init, set} from './__util__';

class Row_number extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    set(this, "op", "row_number");
    if (args[0] !== undefined) set(this, "as", args[0]);
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

export function row_number(...args) {
  return new Row_number(...args);
}