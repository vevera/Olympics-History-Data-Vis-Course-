import {} from './__util__';
import {mark} from './mark';

export function markText(...args) {
  return mark({"type":"text"}, ...args);
}