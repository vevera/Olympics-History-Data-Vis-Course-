import {BaseObject, copy, get, init, set} from './__util__';

class TimeUnit extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "timeUnit", args[0]);
    if (args[1] !== undefined) set(this, "field", args[1]);
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

  field(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
      return obj;
    } else {
      return get(this, "field");
    }
  }

  timeUnit(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "timeUnit", value);
      return obj;
    } else {
      return get(this, "timeUnit");
    }
  }

}

export function timeUnit(...args) {
  return new TimeUnit(...args);
}