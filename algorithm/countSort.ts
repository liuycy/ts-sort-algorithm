export default function countSort(list: number[]): number[] {
  const bucket = [] as number[];

  for (let i = 0; i < list.length; i++) {
    bucket[list[i]] = 1 + (bucket[list[i]] || 0);
  }

  let start = 0;
  for (let i = 0; i < bucket.length; i++) {
    while (bucket[i]--) list[start++] = i;
  }

  return list;
}
