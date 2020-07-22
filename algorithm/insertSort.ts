import type { NumberList } from '../types.ts';

export default function insertSort(list: NumberList) {
  for (let i = 1; i < list.length; i++) {
    let cur = i;
    let cv = list[cur];
    while (cur > -1 && list[cur - 1] > cv) list[cur] = list[--cur];
    list[cur] = cv;
  }
  return list;
}
