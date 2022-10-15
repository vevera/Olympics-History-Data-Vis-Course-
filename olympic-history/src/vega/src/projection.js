import {BaseObject, copy, flat, get, init, set} from './__util__';

class Projection extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "type", args[0]);
  }

  center(...value) {
    if (arguments.length) {
      const obj = copy(this);
      if (value.length === 1 && !Array.isArray(value[0])) {
        value = value[0];
      } else {
        value = flat(value);
      }
      set(obj, "center", value);
      return obj;
    } else {
      return get(this, "center");
    }
  }

  clipAngle(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "clipAngle", value);
      return obj;
    } else {
      return get(this, "clipAngle");
    }
  }

  clipExtent(...value) {
    if (arguments.length) {
      const obj = copy(this);
      if (value.length === 1 && !Array.isArray(value[0])) {
        value = value[0];
      } else {
        value = flat(value);
      }
      set(obj, "clipExtent", value);
      return obj;
    } else {
      return get(this, "clipExtent");
    }
  }

  coefficient(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "coefficient", value);
      return obj;
    } else {
      return get(this, "coefficient");
    }
  }

  distance(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "distance", value);
      return obj;
    } else {
      return get(this, "distance");
    }
  }

  extent(...value) {
    if (arguments.length) {
      const obj = copy(this);
      if (value.length === 1 && !Array.isArray(value[0])) {
        value = value[0];
      } else {
        value = flat(value);
      }
      set(obj, "extent", value);
      return obj;
    } else {
      return get(this, "extent");
    }
  }

  fit(...value) {
    if (arguments.length) {
      const obj = copy(this);
      if (value.length === 1 && !Array.isArray(value[0])) {
        value = value[0];
      } else {
        value = flat(value);
      }
      set(obj, "fit", value);
      return obj;
    } else {
      return get(this, "fit");
    }
  }

  fraction(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "fraction", value);
      return obj;
    } else {
      return get(this, "fraction");
    }
  }

  lobes(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "lobes", value);
      return obj;
    } else {
      return get(this, "lobes");
    }
  }

  parallel(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "parallel", value);
      return obj;
    } else {
      return get(this, "parallel");
    }
  }

  parallels(...value) {
    if (arguments.length) {
      const obj = copy(this);
      if (value.length === 1 && !Array.isArray(value[0])) {
        value = value[0];
      } else {
        value = flat(value);
      }
      set(obj, "parallels", value);
      return obj;
    } else {
      return get(this, "parallels");
    }
  }

  pointRadius(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "pointRadius", value);
      return obj;
    } else {
      return get(this, "pointRadius");
    }
  }

  precision(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "precision", value);
      return obj;
    } else {
      return get(this, "precision");
    }
  }

  radius(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "radius", value);
      return obj;
    } else {
      return get(this, "radius");
    }
  }

  ratio(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "ratio", value);
      return obj;
    } else {
      return get(this, "ratio");
    }
  }

  reflectX(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "reflectX", value);
      return obj;
    } else {
      return get(this, "reflectX");
    }
  }

  reflectY(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "reflectY", value);
      return obj;
    } else {
      return get(this, "reflectY");
    }
  }

  rotate(...value) {
    if (arguments.length) {
      const obj = copy(this);
      if (value.length === 1 && !Array.isArray(value[0])) {
        value = value[0];
      } else {
        value = flat(value);
      }
      set(obj, "rotate", value);
      return obj;
    } else {
      return get(this, "rotate");
    }
  }

  scale(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "scale", value);
      return obj;
    } else {
      return get(this, "scale");
    }
  }

  size(...value) {
    if (arguments.length) {
      const obj = copy(this);
      if (value.length === 1 && !Array.isArray(value[0])) {
        value = value[0];
      } else {
        value = flat(value);
      }
      set(obj, "size", value);
      return obj;
    } else {
      return get(this, "size");
    }
  }

  spacing(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "spacing", value);
      return obj;
    } else {
      return get(this, "spacing");
    }
  }

  tilt(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "tilt", value);
      return obj;
    } else {
      return get(this, "tilt");
    }
  }

  translate(...value) {
    if (arguments.length) {
      const obj = copy(this);
      if (value.length === 1 && !Array.isArray(value[0])) {
        value = value[0];
      } else {
        value = flat(value);
      }
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

}

export function projection(...args) {
  return new Projection(...args);
}