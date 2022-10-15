import {set} from './__util__';
import {field} from './field';

export function fieldO(...args) {
  const obj = field(...args);
  set(obj, "type", "ordinal");
  return obj;
}