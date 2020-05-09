import { swap } from '../utils/index.ts';

export default function selectSort(list: number[]) {
  for (let i = 0; i < list.length; i++) {
    let min = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[min]) min = j;
    }
    if (min !== i) swap(list, min, i);
  }
  return list
}
