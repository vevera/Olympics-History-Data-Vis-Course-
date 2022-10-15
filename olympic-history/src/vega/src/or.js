import {BaseObject, flat, init, set} from './__util__';

class Or extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    args = flat(args);
    set(this, "or", args);
  }

}

export function or(...args) {
  return new Or(...args);
}