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

export function checkSortedList(list: number[]) {
  for (let i = 1; i < list.length; i++) {
    if (list[i] < list[i - 1]) {
      throw new Error('this list is not sorted');
    }
  }
  return true;
}
