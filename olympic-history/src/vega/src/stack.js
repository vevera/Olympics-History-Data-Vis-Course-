import {BaseObject, copy, flat, get, init, set} from './__util__';

class Stack extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "stack", args[0]);
  }

  as(...value) {
    if (arguments.length) {
      const obj = copy(this);
      if (value.length === 1 && !Array.isArray(value[0])) {
        value = value[0];
      } else {
        value = flat(value);
      }
      set(obj, "as", value);
      return obj;
    } else {
      return get(this, "as");
    }
  }

  groupby(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "groupby", value);
      return obj;
    } else {
      return get(this, "groupby");
    }
  }

  offset(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "offset", value);
      return obj;
    } else {
      return get(this, "offset");
    }
  }

  sort(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "sort", value);
      return obj;
    } else {
      return get(this, "sort");
    }
  }

  stack(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "stack", value);
      return obj;
    } else {
      return get(this, "stack");
    }
  }

}

export function stack(...args) {
  return new Stack(...args);
}