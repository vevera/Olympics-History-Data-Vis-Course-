import {BaseObject, init, set} from './__util__';

class Value extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "value", args[0]);
  }

}

export function value(...args) {
  return new Value(...args);
}