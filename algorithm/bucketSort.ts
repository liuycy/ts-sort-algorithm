export default function bucketSort(list: number[], size = 10) {
  let max = list[0];
  let min = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] < min) min = list[i];
    else if (list[i] > max) max = list[i];
  }

  if (min !== max) {
    let bucket = [] as Array<number[]>;

    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const idx = ~~(((item - min) / (max - min)) * (size - 1));
      !bucket[idx] && (bucket[idx] = []);
      bucket[idx].push(item);
    }

    bucket.reduce((i, arr) => {
      bucketSort(arr);
      for (let j = 0; j < arr.length; j++) {
        list[i++] = arr[j];
      }
      return i;
    }, 0);
  }

  return list;
}
