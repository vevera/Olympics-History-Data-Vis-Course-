import {set} from './__util__';
import {field} from './field';

export function fieldT(...args) {
  const obj = field(...args);
  set(obj, "type", "temporal");
  return obj;
}