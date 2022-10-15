import {} from './__util__';
import {mark} from './mark';

export function markSquare(...args) {
  return mark({"type":"square"}, ...args);
}