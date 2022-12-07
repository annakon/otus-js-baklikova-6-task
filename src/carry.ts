export function carry<T>(fn: (...args: T[]) => T): Function {
  return function inner(...args1: T[]) {
    if (fn.length === args1.length) {
      return fn(...args1);
    }
    return function (...args2: T[]) {
      return inner(...args1, ...args2);
    };
  };
}
