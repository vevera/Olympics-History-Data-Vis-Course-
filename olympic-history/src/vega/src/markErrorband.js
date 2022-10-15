import {} from './__util__';
import {mark} from './mark';

export function markErrorband(...args) {
  return mark({"type":"errorband"}, ...args);
}