import {BaseObject, copy, get, init, set} from './__util__';

class Expr extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "expr", args[0]);
  }

  expr(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "expr", value);
      return obj;
    } else {
      return get(this, "expr");
    }
  }

}

export function expr(...args) {
  return new Expr(...args);
}