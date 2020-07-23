import quickSort from './algorithm/quickSort.ts';
import { multistep, randomListInRange } from './utils/index.ts';
import type { NumberList } from './types.ts';

function buildSteps(list: NumberList, size = 10) {
  const steps = [] as Function[];
  const count = ~~(list.length / size) + 1;

  for (let i = 0; i < count; i++) {
    steps.push(function (ref: any) {
      const head = i * size;
      ref[i] = quickSort(list.slice(head, head + size));
    });
  }

  return steps;
}

console.time('multiple');
multistep(
  buildSteps(randomListInRange(10000000), 2000000),
  [{}],
  (ref: any) => {
    // 5路归并
    merge(ref);
    console.timeEnd('multiple');
  }
);

function merge(ref: any) {
  // 数据源, 归并段
  const source: number[][] = Object.values(ref);
  const { read } = useSource(source);

  const { adjust, val, idx } = useLoserTree(
    new Array(5).fill(0).map((_, i) => read(i).value)
  );

  while (val[idx[0]] !== Number.MAX_SAFE_INTEGER) {
    // 输出过程模拟向外存写的操作
    console.log(val[idx[0]]);

    // 继续读入后续的记录
    val[idx[0]] = read(idx[0]).value || Number.MAX_SAFE_INTEGER;

    // 根据新读入的记录的关键字的值，重新调整败者树，找出最终的胜者
    adjust(idx[0]);
  }
}

function useLoserTree(list: number[]) {
  const k = list.length;

  const val: number[] = Array.from(list);

  // 初始化 idx 完全二叉树
  let idx: number[];
  let _min = Number.MAX_SAFE_INTEGER;
  let _minIdx;
  for (let i = 0; i < k; i++) {
    if (val[i] <= _min) {
      _min = val[i];
      _minIdx = i;
    }
  }
  idx = new Array(k).fill(_minIdx);
  for (let i = k - 1; i >= 0; i--) {
    adjust(i);
  }

  // 关键代码是这个调整函数
  function adjust(i: number) {
    let n = (i + k) >> 1;

    while (n > 0) {
      const v = val[idx[n]];

      if (val[i] > v) {
        let swap = i;
        i = idx[n];
        idx[n] = swap;
      }

      n = n >> 1;
    }

    idx[0] = i;
  }

  return { adjust, val, idx };
}

function useSource(source: number[][]) {
  const ite = source.map((items) => items[Symbol.iterator]());

  function read(i: number) {
    return ite[i].next();
  }

  return { read };
}
