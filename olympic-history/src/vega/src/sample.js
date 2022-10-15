import {BaseObject, copy, get, init, set} from './__util__';

class Sample extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "sample", args[0]);
  }

  sample(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "sample", value);
      return obj;
    } else {
      return get(this, "sample");
    }
  }

}

export function sample(...args) {
  return new Sample(...args);
}