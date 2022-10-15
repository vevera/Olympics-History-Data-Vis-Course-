import {BaseObject, copy, get, init, set} from './__util__';

class Filter extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "filter", args[0]);
  }

  filter(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "filter", value);
      return obj;
    } else {
      return get(this, "filter");
    }
  }

}

export function filter(...args) {
  return new Filter(...args);
}