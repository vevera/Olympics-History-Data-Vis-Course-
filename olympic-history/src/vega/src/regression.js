import {BaseObject, copy, flat, get, init, set} from './__util__';

class Regression extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "regression", args[0]);
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

  method(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "method", value);
      return obj;
    } else {
      return get(this, "method");
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

  order(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "order", value);
      return obj;
    } else {
      return get(this, "order");
    }
  }

  params(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "params", value);
      return obj;
    } else {
      return get(this, "params");
    }
  }

  regression(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "regression", value);
      return obj;
    } else {
      return get(this, "regression");
    }
  }

}

export function regression(...args) {
  return new Regression(...args);
}