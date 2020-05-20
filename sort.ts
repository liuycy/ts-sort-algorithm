import { withTimeLogger, randomListInRange } from './utils/index.ts';

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
withTimeLogger('selectSort', selectSort)(randomListInRange(100000));
withTimeLogger('bubbleSort', bubbleSort)(randomListInRange(100000));
withTimeLogger('insertSort', insertSort)(randomListInRange(100000));

// 基于比较的排序算法
withTimeLogger('quickSort', quickSort)(randomListInRange(10000000));
withTimeLogger('heapSort', heapSort)(randomListInRange(10000000));
withTimeLogger('mergeSort', mergeSort)(randomListInRange(10000000));
withTimeLogger(
  'Array.prototype.sort',
  Array.prototype.sort.bind(randomListInRange(10000000))
)((a: number, b: number) => a - b);
withTimeLogger('shellSort', shellSort)(randomListInRange(10000000));

// 非基于比较的排序算法
withTimeLogger('countSort', countSort)(randomListInRange(10000000));
withTimeLogger('radixSort', radixSort)(randomListInRange(10000000));
withTimeLogger('bucketSort', bucketSort)(randomListInRange(10000000), 1000);
