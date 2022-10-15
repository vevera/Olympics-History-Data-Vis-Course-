import {BaseObject, copy, get, init, set} from './__util__';

class UrlData extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "url", args[0]);
  }

  format(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "format", value);
      return obj;
    } else {
      return get(this, "format");
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

  url(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "url", value);
      return obj;
    } else {
      return get(this, "url");
    }
  }

}

export function urlData(...args) {
  return new UrlData(...args);
}