import {BaseObject, copy, get, init, set} from './__util__';

class Slider extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    set(this, "input", "range");
    if (args[0] !== undefined) set(this, "min", args[0]);
    if (args[1] !== undefined) set(this, "max", args[1]);
    if (args[2] !== undefined) set(this, "step", args[2]);
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

  max(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "max", value);
      return obj;
    } else {
      return get(this, "max");
    }
  }

  min(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "min", value);
      return obj;
    } else {
      return get(this, "min");
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

  step(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "step", value);
      return obj;
    } else {
      return get(this, "step");
    }
  }

}

export function slider(...args) {
  return new Slider(...args);
}