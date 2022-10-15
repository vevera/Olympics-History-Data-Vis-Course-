import {BaseObject, copy, flat, get, init, set} from './__util__';

class Quantile extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "quantile", args[0]);
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

  probs(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "probs", value);
      return obj;
    } else {
      return get(this, "probs");
    }
  }

  quantile(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "quantile", value);
      return obj;
    } else {
      return get(this, "quantile");
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

export function quantile(...args) {
  return new Quantile(...args);
}