import {BaseObject, copy, flat, get, init, set} from './__util__';

class Window extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    args = flat(args);
    set(this, "window", args);
  }

  frame(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "frame", value);
      return obj;
    } else {
      return get(this, "frame");
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

  ignorePeers(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "ignorePeers", value);
      return obj;
    } else {
      return get(this, "ignorePeers");
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

  window(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "window", value);
      return obj;
    } else {
      return get(this, "window");
    }
  }

}

export function window(...args) {
  return new Window(...args);
}