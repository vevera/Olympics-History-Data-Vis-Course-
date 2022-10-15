import {BaseObject, assign, copy, flat, get, init, set} from './__util__';

class Graticule extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    assign(this, ...args);
  }

  extent(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "extent", value);
      return obj;
    } else {
      return get(this, "extent");
    }
  }

  extentMajor(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "extentMajor", value);
      return obj;
    } else {
      return get(this, "extentMajor");
    }
  }

  extentMinor(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "extentMinor", value);
      return obj;
    } else {
      return get(this, "extentMinor");
    }
  }

  precision(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "precision", value);
      return obj;
    } else {
      return get(this, "precision");
    }
  }

  step(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "step", value);
      return obj;
    } else {
      return get(this, "step");
    }
  }

  stepMajor(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "stepMajor", value);
      return obj;
    } else {
      return get(this, "stepMajor");
    }
  }

  stepMinor(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "stepMinor", value);
      return obj;
    } else {
      return get(this, "stepMinor");
    }
  }

  toObject() {
    return {graticule: super.toObject()};
  }

}

export function graticule(...args) {
  return new Graticule(...args);
}