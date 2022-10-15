import {} from './__util__';
import {mark} from './mark';

export function markErrorbar(...args) {
  return mark({"type":"errorbar"}, ...args);
}