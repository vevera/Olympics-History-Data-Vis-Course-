import {set} from './__util__';
import {field} from './field';

export function fieldQ(...args) {
  const obj = field(...args);
  set(obj, "type", "quantitative");
  return obj;
}