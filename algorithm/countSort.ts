import type { NumberList } from '../types.ts';
export default function countSort(list: NumberList): NumberList {
  const bucket = [] as NumberList;

  for (let i = 0; i < list.length; i++) {
    bucket[list[i]] = 1 + (bucket[list[i]] || 0);
  }

  let start = 0;
  for (let i = 0; i < bucket.length; i++) {
    while (bucket[i]--) list[start++] = i;
  }

  return list;
}
