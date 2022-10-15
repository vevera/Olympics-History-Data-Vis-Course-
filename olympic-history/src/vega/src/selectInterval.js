import {BaseObject, copy, flat, get, id, init, isEventTarget, nest, raw, set} from './__util__';
import {_selRef} from './_selRef';

class SelectInterval extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    set(this, "type", "interval");
    set(this, "name", args[0] !== undefined ? args[0] : id("name"));
  }

  clear(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "clear", value);
      return obj;
    } else {
      return get(this, "clear");
    }
  }

  encodings(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "encodings", value);
      return obj;
    } else {
      return get(this, "encodings");
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

  mark(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "mark", value);
      return obj;
    } else {
      return get(this, "mark");
    }
  }

  on(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "on", value);
      return obj;
    } else {
      return get(this, "on");
    }
  }

  resolve(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "resolve", value);
      return obj;
    } else {
      return get(this, "resolve");
    }
  }

  translate(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "translate", value);
      return obj;
    } else {
      return get(this, "translate");
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

  zoom(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "zoom", value);
      return obj;
    } else {
      return get(this, "zoom");
    }
  }

  bind(value) {
    if (arguments.length) {
      const obj = copy(this);
      value = isEventTarget(value) ? {element: raw(value)} : value;
      set(obj, "bind", value);
      return obj;
    } else {
      return get(this, "bind");
    }
  }

  name(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "name", value);
      return obj;
    } else {
      return get(this, "name");
    }
  }

  value(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "value", value);
      return obj;
    } else {
      return get(this, "value");
    }
  }

  init(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "value", value);
      return obj;
    } else {
      return get(this, "value");
    }
  }

  views(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "views", value);
      return obj;
    } else {
      return get(this, "views");
    }
  }

  key(...values) {
    let obj = _selRef(this.name());
    return obj.key(...values);
  }

  field(...values) {
    let obj = _selRef(this.name());
    return obj.field(...values);
  }

  encoding(...values) {
    let obj = _selRef(this.name());
    return obj.encoding(...values);
  }

  empty(...values) {
    let obj = _selRef(this.name());
    return obj.empty(...values);
  }

  toObject(flag) {
    return flag ? nest(super.toObject(), ["name","bind","value","views"], "select") : {param: this.name()};
  }

}

export function selectInterval(...args) {
  return new SelectInterval(...args);
}