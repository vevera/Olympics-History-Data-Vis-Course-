import {} from './__util__';
import {mark} from './mark';

export function markRect(...args) {
  return mark({"type":"rect"}, ...args);
}