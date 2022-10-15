import {} from './__util__';
import {mark} from './mark';

export function markPoint(...args) {
  return mark({"type":"point"}, ...args);
}