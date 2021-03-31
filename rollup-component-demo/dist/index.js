'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function fixedRefactor(value, n) {
  let val;
  if (!n) {
    val = Math.round(value);
  } else {
    val = Math.round(val * Math.pow(10, n)) / Math.pow(10, n);
  }
  return val
}

exports.fixedRefactor = fixedRefactor;
