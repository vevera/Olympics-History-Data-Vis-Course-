import {BaseObject, assign, flat, init, set} from './__util__';
import {aggregate} from './aggregate';
import {density} from './density';
import {join} from './join';
import {joinaggregate} from './joinaggregate';
import {loess} from './loess';
import {pivot} from './pivot';
import {quantile} from './quantile';
import {regression} from './regression';
import {window} from './window';

class Groupby extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    args = flat(args);
    set(this, "groupby", args);
  }

  aggregate(...values) {
    const obj = aggregate(...values);
    return assign(obj, this);
  }

  density(...values) {
    const obj = density(...values);
    return assign(obj, this);
  }

  join(...values) {
    const obj = join(...values);
    return assign(obj, this);
  }

  joinaggregate(...values) {
    const obj = joinaggregate(...values);
    return assign(obj, this);
  }

  loess(...values) {
    const obj = loess(...values);
    return assign(obj, this);
  }

  pivot(...values) {
    const obj = pivot(...values);
    return assign(obj, this);
  }

  quantile(...values) {
    const obj = quantile(...values);
    return assign(obj, this);
  }

  regression(...values) {
    const obj = regression(...values);
    return assign(obj, this);
  }

  window(...values) {
    const obj = window(...values);
    return assign(obj, this);
  }

}

export function groupby(...args) {
  return new Groupby(...args);
}