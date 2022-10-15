import {BaseObject, copy, flat, get, init, set} from './__util__';

class Loess extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "loess", args[0]);
  }

  as(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "as", value);
      return obj;
    } else {
      return get(this, "as");
    }
  }

  bandwidth(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "bandwidth", value);
      return obj;
    } else {
      return get(this, "bandwidth");
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

  loess(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "loess", value);
      return obj;
    } else {
      return get(this, "loess");
    }
  }

  on(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "on", value);
      return obj;
    } else {
      return get(this, "on");
    }
  }

}

export function loess(...args) {
  return new Loess(...args);
}