import {BaseObject, annotate, copy, flat, get, init, isArray, isIterable, isString, merge, raw, set} from './__util__';
import {_facet} from './_facet';
import {_repeat} from './_repeat';
import {render, toSpec, toString, toView} from './__view__';

class Layer extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    args = flat(args);
    set(this, "layer", args);
  }

  autosize(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "autosize", value);
      return obj;
    } else {
      return get(this, "autosize");
    }
  }

  background(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "background", value);
      return obj;
    } else {
      return get(this, "background");
    }
  }

  config(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "config", value);
      return obj;
    } else {
      return get(this, "config");
    }
  }

  datasets(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "datasets", value);
      return obj;
    } else {
      return get(this, "datasets");
    }
  }

  description(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "description", value);
      return obj;
    } else {
      return get(this, "description");
    }
  }

  height(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "height", value);
      return obj;
    } else {
      return get(this, "height");
    }
  }

  layer(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "layer", value);
      return obj;
    } else {
      return get(this, "layer");
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

  padding(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "padding", value);
      return obj;
    } else {
      return get(this, "padding");
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

  title(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "title", value);
      return obj;
    } else {
      return get(this, "title");
    }
  }

  usermeta(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "usermeta", value);
      return obj;
    } else {
      return get(this, "usermeta");
    }
  }

  view(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "view", value);
      return obj;
    } else {
      return get(this, "view");
    }
  }

  width(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "width", value);
      return obj;
    } else {
      return get(this, "width");
    }
  }

  project(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "projection", value);
      return obj;
    } else {
      return get(this, "projection");
    }
  }

  encode(...values) {
    if (values.length === 1 && Array.isArray(values[0])) {
      values = values[0];
    }
    if (values.length) {
      const val = get(this, "encoding");
      const obj = copy(this);
      if (val) values = [val].concat(values);
      set(obj, "encoding", merge(1, values));
      return obj;
    } else {
      return get(this, "encoding");
    }
  }

  data(value) {
    if (arguments.length) {
      const obj = copy(this);
      value = isArray(value) ? {values: raw(value)} : isIterable(value) ? {values: raw(value)} : isString(value) ? {url: value} : value;
      set(obj, "data", value);
      return obj;
    } else {
      return get(this, "data");
    }
  }

  params(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      value = annotate(value, 1);
      set(obj, "params", value);
      return obj;
    } else {
      return get(this, "params");
    }
  }

  transform(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "transform", value);
      return obj;
    } else {
      return get(this, "transform");
    }
  }

  facet(...values) {
    values = values.slice(0, 1);
    const obj = _facet(...values);
    return obj.spec(this);
  }

  repeat(...values) {
    values = values.slice(0, 1);
    const obj = _repeat(...values);
    return obj.spec(this);
  }

  render(...values) {
    return render.apply(this, values);
  }

  toView(...values) {
    return toView.apply(this, values);
  }

  toSpec(...values) {
    return toSpec.apply(this, values);
  }

  toString(...values) {
    return toString.apply(this, values);
  }

}

export function layer(...args) {
  return new Layer(...args);
}