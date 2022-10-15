import {BaseObject, copy, flat, get, init, set} from './__util__';

class Field extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "field", args[0]);
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

  type(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "type", value);
      return obj;
    } else {
      return get(this, "type");
    }
  }

  equals(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "equal", value);
      return obj;
    } else {
      return get(this, "equal");
    }
  }

  gte(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "gte", value);
      return obj;
    } else {
      return get(this, "gte");
    }
  }

  gt(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "gt", value);
      return obj;
    } else {
      return get(this, "gt");
    }
  }

  lte(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "lte", value);
      return obj;
    } else {
      return get(this, "lte");
    }
  }

  lt(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "lt", value);
      return obj;
    } else {
      return get(this, "lt");
    }
  }

  oneOf(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "oneOf", value);
      return obj;
    } else {
      return get(this, "oneOf");
    }
  }

  inRange(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "range", value);
      return obj;
    } else {
      return get(this, "range");
    }
  }

  valid(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "valid", value);
      return obj;
    } else {
      return get(this, "valid");
    }
  }

}

export function field(...args) {
  return new Field(...args);
}