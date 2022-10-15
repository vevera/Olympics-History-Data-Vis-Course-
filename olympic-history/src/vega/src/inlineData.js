import {BaseObject, copy, get, init, isArray, isObject, raw, set} from './__util__';

class InlineData extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "values", isArray(args[0]) ? raw(args[0]) : isObject(args[0]) ? raw(args[0]) : args[0]);
  }

  format(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "format", value);
      return obj;
    } else {
      return get(this, "format");
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

  values(value) {
    if (arguments.length) {
      const obj = copy(this);
      value = isArray(value) ? raw(value) : isObject(value) ? raw(value) : value;
      set(obj, "values", value);
      return obj;
    } else {
      return get(this, "values");
    }
  }

}

export function inlineData(...args) {
  return new InlineData(...args);
}