import {BaseObject, assign, copy, get, init, isArray, isIterable, isObject, isString, nest, raw, set} from './__util__';

class Dsv extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    set(this, "type", "dsv");
    args = args.map(_ => isObject(_) ? {values: _} : isArray(_) ? {values: raw(_)} : isIterable(_) ? {values: raw(_)} : isString(_) ? {url: _} : _);
    assign(this, ...args);
  }

  delimiter(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "delimiter", value);
      return obj;
    } else {
      return get(this, "delimiter");
    }
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

  url(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "url", value);
      return obj;
    } else {
      return get(this, "url");
    }
  }

  values(value) {
    if (arguments.length) {
      const obj = copy(this);
      value = isArray(value) ? raw(value) : isObject(value) ? raw(value) : value;
      set(obj, "values", value);
      return obj;
    } else {
      return get(this, "values");
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

  toObject() {
    return nest(super.toObject(), ["url","values","name"], "format");
  }

}

export function dsv(...args) {
  return new Dsv(...args);
}