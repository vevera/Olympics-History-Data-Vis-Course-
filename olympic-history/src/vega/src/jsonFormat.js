import {BaseObject, assign, copy, get, init, set} from './__util__';

class JsonFormat extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    set(this, "type", "json");
    assign(this, ...args);
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

  property(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "property", value);
      return obj;
    } else {
      return get(this, "property");
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

export function jsonFormat(...args) {
  return new JsonFormat(...args);
}