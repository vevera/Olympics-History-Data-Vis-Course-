import {} from './__util__';
import {mark} from './mark';

export function markArea(...args) {
  return mark({"type":"area"}, ...args);
}