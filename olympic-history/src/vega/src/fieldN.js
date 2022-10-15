import {set} from './__util__';
import {field} from './field';

export function fieldN(...args) {
  const obj = field(...args);
  set(obj, "type", "nominal");
  return obj;
}