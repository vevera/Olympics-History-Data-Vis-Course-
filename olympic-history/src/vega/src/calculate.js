import {BaseObject, copy, get, init, set} from './__util__';

class Calculate extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "calculate", args[0]);
  }

  as(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "as", value);
      return obj;
    } else {
      return get(this, "as");
    }
  }

  calculate(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "calculate", value);
      return obj;
    } else {
      return get(this, "calculate");
    }
  }

}

export function calculate(...args) {
  return new Calculate(...args);
}