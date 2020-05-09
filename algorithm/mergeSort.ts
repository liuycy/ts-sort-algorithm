export default function mergeSort(list: number[]): number[] {
  if (list.length < 2) return list;

  const mid = list.length >> 1;

  return merge(mergeSort(list.slice(0, mid)), mergeSort(list.slice(mid)));
}

function merge(left: number[], right: number[]): number[] {
  const result = [];
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) result.push(left[l++]);
    else result.push(right[r++]);
  }

  while (l < left.length) result.push(left[l++]);
  while (r < right.length) result.push(right[r++]);

  return result;
}
