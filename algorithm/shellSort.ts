import { swap } from '../utils/index.ts';

// 采用该算法生成 gaps, 最坏时间复杂度为 O(N ** (4/3))
// k 是从 0 开始的正整数
function calcGap(k: number) {
  if (k % 2 === 0) {
    return 9 * (2 ** k - 2 ** (k / 2)) + 1;
  } else {
    return 8 * 2 ** k - 6 * 2 ** ((k + 1) / 2) + 1;
  }
}

// 生成所有 小于 正整数 n 的 gaps
function getGapsOf(n: number): number[] {
  const result = [calcGap(0)];
  while (result[result.length - 1] < n) {
    result.push(calcGap(result.length));
  }
  return result.slice(0, -1);
}

// shellSort 是 insertSort 的改良版
// 由于 insertSort 在对 几乎有序的数组 进行排序时, 效率比较高
// 所以我们采取 分步对数组进行 insertSort 来进行改良
// 第一步 step 等于靠右较大的下标, 从该下标对数组进行 insertSort;
// 每一步递减 step, 重复进行 insertSort;
// 最后 step = 1, 已经得到一个几乎有序的数组, 再进行一次 insertSort, 排序完成
export default function shellSort(list: number[]) {
  let len = list.length;
  const steps = getGapsOf(len);

  while (steps.length) {
    const step = steps.pop()!;

    // 以下是 insertSort
    for (let i = step; i < len; i++) {
      let cur = i;
      let cv = list[cur];
      while (cur > -1 && list[cur - step] > cv) swap(list, cur, (cur -= step));
      list[cur] = cv;
    }
  }

  return list;
}
