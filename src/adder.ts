type sumFunction = (x: number) => sumFunction;

export function sum(arg1 = 0): (x: number) => sumFunction {
  let S = arg1;
  const returnSum = function (arg2: number): (x: number) => sumFunction {
    S = S + arg2;
    return returnSum;
  };

  returnSum.toString = () => {
    const res = String(S);
    S = arg1;
    return res;
  };

  return returnSum;
}
