import type { NumberList } from '../types.ts';

export default function bucketSort(list: NumberList, size = 10) {
  let max = list[0];
  let min = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] < min) min = list[i];
    else if (list[i] > max) max = list[i];
  }

  if (min !== max) {
    let buckets: Array<number[]> = [];

    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const idx = ~~(((item - min) / (max - min)) * (size - 1));
      !buckets[idx] && (buckets[idx] = []);
      buckets[idx].push(item);
    }
    buckets.reduce((i, arr) => {
      bucketSort(arr);
      for (let j = 0; j < arr.length; j++) {
        list[i++] = arr[j];
      }
      return i;
    }, 0);
  }

  return list;
}
