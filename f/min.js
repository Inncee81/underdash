function min(gt) {
  return this.slice(1).reduce((min, cur) => gt(min, cur)?cur:min, this[0]);
}