import {} from './__util__';
import {mark} from './mark';

export function markCircle(...args) {
  return mark({"type":"circle"}, ...args);
}