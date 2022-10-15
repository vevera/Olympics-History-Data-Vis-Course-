import {BaseObject, copy, get, id, init, isEventTarget, raw, set} from './__util__';

class Param extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    set(this, "name", args[0] !== undefined ? args[0] : id("name"));
  }

  expr(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "expr", value);
      return obj;
    } else {
      return get(this, "expr");
    }
  }

  name(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "name", value);
      return obj;
    } else {
      return get(this, "name");
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

  bind(value) {
    if (arguments.length) {
      const obj = copy(this);
      value = isEventTarget(value) ? {element: raw(value)} : value;
      set(obj, "bind", value);
      return obj;
    } else {
      return get(this, "bind");
    }
  }

  toObject(flag) {
    return flag ? super.toObject() : {param: this.name()};
  }

}

export function param(...args) {
  return new Param(...args);
}