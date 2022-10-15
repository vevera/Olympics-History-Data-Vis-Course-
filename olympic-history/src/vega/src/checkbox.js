import {BaseObject, assign, copy, get, init, set} from './__util__';

class Checkbox extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    set(this, "input", "checkbox");
    assign(this, ...args);
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

  name(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "name", value);
      return obj;
    } else {
      return get(this, "name");
    }
  }

}

export function checkbox(...args) {
  return new Checkbox(...args);
}