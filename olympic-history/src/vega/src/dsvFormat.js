import {BaseObject, assign, copy, get, init, set} from './__util__';

class DsvFormat extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    set(this, "type", "dsv");
    assign(this, ...args);
  }

  delimiter(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "delimiter", value);
      return obj;
    } else {
      return get(this, "delimiter");
    }
  }

  parse(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "parse", value);
      return obj;
    } else {
      return get(this, "parse");
    }
  }

  type(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "type", value);
      return obj;
    } else {
      return get(this, "type");
    }
  }

}

export function dsvFormat(...args) {
  return new DsvFormat(...args);
}