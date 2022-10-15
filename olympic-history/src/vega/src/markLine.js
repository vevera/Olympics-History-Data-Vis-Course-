import {} from './__util__';
import {mark} from './mark';

export function markLine(...args) {
  return mark({"type":"line"}, ...args);
}