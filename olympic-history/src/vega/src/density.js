import {BaseObject, copy, flat, get, init, set} from './__util__';

class Density extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "density", args[0]);
  }

  as(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "as", value);
      return obj;
    } else {
      return get(this, "as");
    }
  }

  bandwidth(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "bandwidth", value);
      return obj;
    } else {
      return get(this, "bandwidth");
    }
  }

  counts(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "counts", value);
      return obj;
    } else {
      return get(this, "counts");
    }
  }

  cumulative(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "cumulative", value);
      return obj;
    } else {
      return get(this, "cumulative");
    }
  }

  density(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "density", value);
      return obj;
    } else {
      return get(this, "density");
    }
  }

  extent(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "extent", value);
      return obj;
    } else {
      return get(this, "extent");
    }
  }

  groupby(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "groupby", value);
      return obj;
    } else {
      return get(this, "groupby");
    }
  }

  maxsteps(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "maxsteps", value);
      return obj;
    } else {
      return get(this, "maxsteps");
    }
  }

  minsteps(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "minsteps", value);
      return obj;
    } else {
      return get(this, "minsteps");
    }
  }

  steps(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "steps", value);
      return obj;
    } else {
      return get(this, "steps");
    }
  }

}

export function density(...args) {
  return new Density(...args);
}