import { swap } from '../utils/index.ts';
import type { NumberList } from '../types.ts';

function partition(
  list: NumberList,
  start: number,
  end: number,
  pivot: number
) {
  swap(list, start, pivot);

  for (let i = start; i < end; i++) {
    if (list[i] < list[start]) swap(list, i, start++);
    else if (list[i] > list[start]) swap(list, i--, --end);
  }

  return [start, end];
}

export default function quickSort(
  list: NumberList,
  start?: number,
  end?: number
) {
  if (start === void 0) start = 0;
  if (end === void 0) end = list.length;

  if (end - start < 2) return list;

  const pivot = start + ~~((end - start) * Math.random());
  const board = partition(list, start, end, pivot);

  quickSort(list, start, board[0]);
  quickSort(list, board[1], end);

  return list;
}
