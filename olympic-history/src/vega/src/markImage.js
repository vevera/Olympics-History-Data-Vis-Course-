import {} from './__util__';
import {mark} from './mark';

export function markImage(...args) {
  return mark({"type":"image"}, ...args);
}