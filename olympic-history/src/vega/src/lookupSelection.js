import {BaseObject, copy, flat, get, init, isObject, isString, prop, set} from './__util__';

class LookupSelection extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "param", isObject(args[0]) ? prop(args[0], "name") : isString(args[0]) ? args[0] : args[0]);
  }

  fields(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "fields", value);
      return obj;
    } else {
      return get(this, "fields");
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

export function lookupSelection(...args) {
  return new LookupSelection(...args);
}