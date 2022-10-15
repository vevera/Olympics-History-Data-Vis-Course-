import {} from './__util__';
import {mark} from './mark';

export function markBar(...args) {
  return mark({"type":"bar"}, ...args);
}