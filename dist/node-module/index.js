"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function sum(...args) {
  return args.length === 0 ? 0 : args.length < 2 ? args[0] : args.reduce((s, a) => a + s);
}
function multiply(...args) {
  return args.length === 0 ? 0 : args.length < 2 ? args[0] : args.reduce((s, a) => a * s);
}
function divide(...args) {
  return args.length === 0 ? 0 : args.length < 2 ? args[0] : args.reduce((s, a) => s / a);
}
function subtract(...args) {
  return args.length === 0 ? 0 : args.length < 2 ? args[0] : args.reduce((s, a) => s - a);
}

exports.sum = sum;
exports.multiply = multiply;
exports.divide = divide;
exports.subtract = subtract;