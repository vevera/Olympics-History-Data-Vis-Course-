import {} from './__util__';
import {mark} from './mark';

export function markGeoshape(...args) {
  return mark({"type":"geoshape"}, ...args);
}