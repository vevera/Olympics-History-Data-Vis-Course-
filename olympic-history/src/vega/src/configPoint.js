import {BaseObject, assign, copy, flat, get, init, set} from './__util__';

class ConfigPoint extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    set(this, "type", "point");
    assign(this, ...args);
  }

  clear(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "clear", value);
      return obj;
    } else {
      return get(this, "clear");
    }
  }

  encodings(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "encodings", value);
      return obj;
    } else {
      return get(this, "encodings");
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

  nearest(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "nearest", value);
      return obj;
    } else {
      return get(this, "nearest");
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

  resolve(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "resolve", value);
      return obj;
    } else {
      return get(this, "resolve");
    }
  }

  toggle(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "toggle", value);
      return obj;
    } else {
      return get(this, "toggle");
    }
  }

  type(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "type", value);
      return obj;
    } else {
      return get(this, "type");
    }
  }

}

export function configPoint(...args) {
  return new ConfigPoint(...args);
}