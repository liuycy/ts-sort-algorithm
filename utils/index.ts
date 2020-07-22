import type { NumberList } from '../types.ts';

export function swap(list: NumberList, i: number, j: number) {
  let tmp = list[i];
  list[i] = list[j];
  list[j] = tmp;
}

export function randomListInRange(n: number) {
  return new Array(n).fill(0).map(() => ~~(n * Math.random()));
}

export function randomUint32ArrayInRange(n: number) {
  return new Uint32Array(n).fill(0).map(() => ~~(n * Math.random()));
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

export function checkSortedList(list: NumberList) {
  for (let i = 1; i < list.length; i++) {
    if (list[i] < list[i - 1]) {
      throw new Error('this list is not sorted');
    }
  }
  return true;
}

export function multistep(steps: Function[], args: any[], callback: Function) {
  const tasks = steps.concat();
  queueMicrotask(function tick() {
    tasks.shift()!.apply(null, args);
    if (tasks.length) {
      queueMicrotask(tick);
    } else {
      callback.apply(null, args);
    }
  });
}
