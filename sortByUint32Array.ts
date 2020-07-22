import { withTimeLogger, randomUint32ArrayInRange } from './utils/index.ts';

import selectSort from './algorithm/selectSort.ts';
import bubbleSort from './algorithm/bubbleSort.ts';
import insertSort from './algorithm/insertSort.ts';
import quickSort from './algorithm/quickSort.ts';
import countSort from './algorithm/countSort.ts';
import heapSort from './algorithm/heapSort.ts';
import mergeSort from './algorithm/mergeSort.ts';
import shellSort from './algorithm/shellSort.ts';
import radixSort from './algorithm/radixSort.ts';
import bucketSort from './algorithm/bucketSort.ts';

// O(n²)排序算法
withTimeLogger('selectSort', selectSort)(randomUint32ArrayInRange(100000));
withTimeLogger('bubbleSort', bubbleSort)(randomUint32ArrayInRange(100000));
withTimeLogger('insertSort', insertSort)(randomUint32ArrayInRange(100000));

// 基于比较的排序算法
withTimeLogger('quickSort', quickSort)(randomUint32ArrayInRange(10000000));
withTimeLogger('heapSort', heapSort)(randomUint32ArrayInRange(10000000));
withTimeLogger('mergeSort', mergeSort)(randomUint32ArrayInRange(10000000));
withTimeLogger(
  'Uint32Array.prototype.sort',
  Uint32Array.prototype.sort.bind(randomUint32ArrayInRange(10000000))
)((a: number, b: number) => a - b);
withTimeLogger('shellSort', shellSort)(randomUint32ArrayInRange(10000000));

// 非基于比较的排序算法
withTimeLogger('countSort', countSort)(randomUint32ArrayInRange(10000000));
withTimeLogger('radixSort', radixSort)(randomUint32ArrayInRange(10000000));
withTimeLogger('bucketSort', bucketSort)(
  randomUint32ArrayInRange(10000000),
  1000
);
