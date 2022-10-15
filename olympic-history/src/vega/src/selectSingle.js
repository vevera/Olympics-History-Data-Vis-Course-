import {set} from './__util__';
import {selectPoint} from './selectPoint';

export function selectSingle(...args) {
  const obj = selectPoint(...args);
  set(obj, "toggle", false);
  return obj;
}