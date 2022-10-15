import {BaseObject, annotate, assign, copy, flat, get, init, isArray, isIterable, isString, raw, set} from './__util__';
import {_facet} from './_facet';
import {_repeat} from './_repeat';
import {render, toSpec, toString, toView} from './__view__';

class Spec extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    assign(this, ...args);
  }

  align(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "align", value);
      return obj;
    } else {
      return get(this, "align");
    }
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

  bounds(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "bounds", value);
      return obj;
    } else {
      return get(this, "bounds");
    }
  }

  center(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "center", value);
      return obj;
    } else {
      return get(this, "center");
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

  encoding(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "encoding", value);
      return obj;
    } else {
      return get(this, "encoding");
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

  mark(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "mark", value);
      return obj;
    } else {
      return get(this, "mark");
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

  projection(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "projection", value);
      return obj;
    } else {
      return get(this, "projection");
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

  spacing(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "spacing", value);
      return obj;
    } else {
      return get(this, "spacing");
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

  columns(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "columns", value);
      return obj;
    } else {
      return get(this, "columns");
    }
  }

  spec(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "spec", value);
      return obj;
    } else {
      return get(this, "spec");
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

  concat(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "concat", value);
      return obj;
    } else {
      return get(this, "concat");
    }
  }

  vconcat(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "vconcat", value);
      return obj;
    } else {
      return get(this, "vconcat");
    }
  }

  hconcat(...value) {
    if (arguments.length) {
      const obj = copy(this);
      value = flat(value);
      set(obj, "hconcat", value);
      return obj;
    } else {
      return get(this, "hconcat");
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

export function spec(...args) {
  return new Spec(...args);
}