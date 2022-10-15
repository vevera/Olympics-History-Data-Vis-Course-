import {BaseObject, assign, init} from './__util__';

class Sphere extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    assign(this, ...args);
  }

  toObject() {
    return {sphere: super.toObject()};
  }

}

export function sphere(...args) {
  return new Sphere(...args);
}