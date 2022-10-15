import {BaseObject, copy, flat, get, init, set} from './__util__';

class Menu extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    set(this, "input", "select");
    args = flat(args);
    set(this, "options", args);
  }

  debounce(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "debounce", value);
      return obj;
    } else {
      return get(this, "debounce");
    }
  }

  element(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "element", value);
      return obj;
    } else {
      return get(this, "element");
    }
  }

  input(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "input", value);
      return obj;
    } else {
      return get(this, "input");
    }
  }

  labels(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "labels", value);
      return obj;
    } else {
      return get(this, "labels");
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

  options(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "options", value);
      return obj;
    } else {
      return get(this, "options");
    }
  }

}

export function menu(...args) {
  return new Menu(...args);
}