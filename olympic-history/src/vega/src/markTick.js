import {} from './__util__';
import {mark} from './mark';

export function markTick(...args) {
  return mark({"type":"tick"}, ...args);
}