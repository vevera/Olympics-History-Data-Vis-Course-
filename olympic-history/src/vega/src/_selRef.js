import {BaseObject, copy, flat, get, init, set} from './__util__';

class _SelRef extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "param", args[0]);
  }

  key(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "key", value);
      return obj;
    } else {
      return get(this, "key");
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

  field(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
      return obj;
    } else {
      return get(this, "field");
    }
  }

  encoding(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "encoding", value);
      return obj;
    } else {
      return get(this, "encoding");
    }
  }

  empty(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "empty", value);
      return obj;
    } else {
      return get(this, "empty");
    }
  }

}

export function _selRef(...args) {
  return new _SelRef(...args);
}