export function swap(list: number[], i: number, j: number) {
  let tmp = list[i];
  list[i] = list[j];
  list[j] = tmp;
}

export function randomListInRange(n: number) {
  return Array(n)
    .fill(0)
    .map(() => ~~(n * Math.random()));
}

export function withTimeLogger(flag: string, func: Function) {
  return function (...args: any[]) {
    console.time(flag);
    const result = func.call(null, ...args);
    console.timeEnd(flag);
    console.log(result);
    return result;
  };
}
