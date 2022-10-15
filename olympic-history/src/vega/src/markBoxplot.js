import {} from './__util__';
import {mark} from './mark';

export function markBoxplot(...args) {
  return mark({"type":"boxplot"}, ...args);
}