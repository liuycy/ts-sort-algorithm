import { swap } from '../utils/index.ts';

export default function bubbleSort(list: number[]) {
  for (let i = 0; i < list.length; i++) {
    let isSorted = true; // 用这个变量优化一下冒泡排序
    for (let j = 0; j < list.length; j++) {
      if (list[j + 1] < list[j]) {
        swap(list, j + 1, j);
        isSorted = false;
      }
    }
    // 如果是有序数组, 就不会为 false, 只会遍历一次
    if (isSorted) break;
  }
  return list;
}
