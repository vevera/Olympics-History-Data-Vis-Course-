import {BaseObject, assign, copy, get, init, set} from './__util__';

class TopojsonFormat extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    set(this, "type", "topojson");
    assign(this, ...args);
  }

  feature(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "feature", value);
      return obj;
    } else {
      return get(this, "feature");
    }
  }

  mesh(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "mesh", value);
      return obj;
    } else {
      return get(this, "mesh");
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

}

export function topojsonFormat(...args) {
  return new TopojsonFormat(...args);
}