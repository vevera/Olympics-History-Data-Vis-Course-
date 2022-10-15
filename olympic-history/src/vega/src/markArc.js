import {} from './__util__';
import {mark} from './mark';

export function markArc(...args) {
  return mark({"type":"arc"}, ...args);
}