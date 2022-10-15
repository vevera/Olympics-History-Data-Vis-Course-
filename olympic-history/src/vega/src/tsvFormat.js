import {BaseObject, assign, copy, get, init, set} from './__util__';

class TsvFormat extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    set(this, "type", "tsv");
    assign(this, ...args);
  }

  parse(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "parse", value);
      return obj;
    } else {
      return get(this, "parse");
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

export function tsvFormat(...args) {
  return new TsvFormat(...args);
}