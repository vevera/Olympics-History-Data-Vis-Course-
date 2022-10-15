import {BaseObject, copy, flat, get, init, set} from './__util__';

class UtcYMDHMS extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    set(this, "timeUnit", "utcyearmonthdatehoursminutesseconds");
    if (args[0] !== undefined) set(this, "field", args[0]);
    if (args[1] !== undefined) set(this, "as", args[1]);
  }

  as(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "as", value);
      return obj;
    } else {
      return get(this, "as");
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

  timeUnit(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "timeUnit", value);
      return obj;
    } else {
      return get(this, "timeUnit");
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

export function utcYMDHMS(...args) {
  return new UtcYMDHMS(...args);
}