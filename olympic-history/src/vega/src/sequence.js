import {BaseObject, copy, get, init, set} from './__util__';

class Sequence extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    if (args[0] !== undefined) set(this, "start", args[0]);
    if (args[1] !== undefined) set(this, "stop", args[1]);
    if (args[2] !== undefined) set(this, "step", args[2]);
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

  start(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "start", value);
      return obj;
    } else {
      return get(this, "start");
    }
  }

  step(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "step", value);
      return obj;
    } else {
      return get(this, "step");
    }
  }

  stop(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "stop", value);
      return obj;
    } else {
      return get(this, "stop");
    }
  }

  toObject() {
    return {sequence: super.toObject()};
  }

}

export function sequence(...args) {
  return new Sequence(...args);
}