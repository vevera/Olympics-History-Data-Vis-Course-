import {} from './__util__';
import {mark} from './mark';

export function markRule(...args) {
  return mark({"type":"rule"}, ...args);
}