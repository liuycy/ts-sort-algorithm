export default function radixSort(list: number[]) {
  let max = -Infinity;
  let buckets = [] as Array<number[]>;
  let digit = 1;
  let radix = 10;

  while (digit) {
    const hasMax = Number.isFinite(max);

    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      !hasMax && item > max && (max = item);
      const idx = item % radix;
      !buckets[idx] && (buckets[idx] = []);
      buckets[idx].push(item);
    }

    !hasMax && (digit = max.toString().length);

    buckets.reduce((i, arr) => {
      for (let j = 0; j < arr.length; j++) {
        list[i++] = arr[j];
      }
      return i;
    }, 0);

    buckets = [];
    digit -= 1;
    radix *= 10;
  }

  return list;
}
