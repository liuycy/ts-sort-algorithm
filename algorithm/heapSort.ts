import { swap } from '../utils/index.ts';

export default function heapSort(list: number[]): number[] {
  for (let i = 0; i < list.length; i++) {
    heapInsert(list, i);
  }

  for (let last = list.length - 1; last >= 0; last--) {
    swap(list, 0, last);
    heapify(list, 0, last);
  }

  return list;
}

function heapify(list: number[], idx: number, len: number) {
  let next = 2 * idx + 1;

  while (next < len) {
    if (next + 1 < len && list[next + 1] > list[next]) next++;
    if (list[next] > list[idx]) swap(list, next, idx);
    idx = next;
    next = 2 * idx + 1;
  }
}

function heapInsert(list: number[], idx: number) {
  let pid = (idx - 1) >> 1;

  while (pid > -1 && list[idx] > list[pid]) {
    swap(list, idx, pid);
    idx = pid;
    pid = (pid - 1) >> 1;
  }
}
