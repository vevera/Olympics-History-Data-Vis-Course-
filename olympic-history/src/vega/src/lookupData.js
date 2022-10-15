import {BaseObject, copy, flat, get, init, isArray, isIterable, isString, raw, set} from './__util__';

class LookupData extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "data", isArray(args[0]) ? {values: raw(args[0])} : isIterable(args[0]) ? {values: raw(args[0])} : isString(args[0]) ? {url: args[0]} : args[0]);
  }

  data(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "data", value);
      return obj;
    } else {
      return get(this, "data");
    }
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

}

export function lookupData(...args) {
  return new LookupData(...args);
}