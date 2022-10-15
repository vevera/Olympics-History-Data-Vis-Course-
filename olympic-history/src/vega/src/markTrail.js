import {} from './__util__';
import {mark} from './mark';

export function markTrail(...args) {
  return mark({"type":"trail"}, ...args);
}