// @flow

function sum(...args: number[]) {
  return args.length === 0
    ? 0
    : args.length < 2 ? args[0] : args.reduce((s, a) => a + s)
}
function multiply(...args: number[]) {
  return args.length === 0
    ? 0
    : args.length < 2 ? args[0] : args.reduce((s, a) => a * s)
}
function divide(...args: number[]) {
  return args.length === 0
    ? 0
    : args.length < 2 ? args[0] : args.reduce((s, a) => s / a)
}
function subtract(...args: number[]) {
  return args.length === 0
    ? 0
    : args.length < 2 ? args[0] : args.reduce((s, a) => s - a)
}

export {sum, multiply, divide, subtract}
