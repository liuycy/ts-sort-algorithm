import {
  withTimeLogger,
  randomListInRange,
  checkSortedList,
} from './utils/index.ts';

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
checkSortedList(
  withTimeLogger('selectSort', selectSort)(randomListInRange(100000))
);
checkSortedList(
  withTimeLogger('bubbleSort', bubbleSort)(randomListInRange(100000))
);
checkSortedList(
  withTimeLogger('insertSort', insertSort)(randomListInRange(100000))
);

// 基于比较的排序算法
checkSortedList(
  withTimeLogger('quickSort', quickSort)(randomListInRange(10000000))
);
checkSortedList(
  withTimeLogger('heapSort', heapSort)(randomListInRange(10000000))
);
checkSortedList(
  withTimeLogger('mergeSort', mergeSort)(randomListInRange(10000000))
);
checkSortedList(
  withTimeLogger(
    'Array.prototype.sort',
    Array.prototype.sort.bind(randomListInRange(10000000))
  )((a: number, b: number) => a - b)
);
checkSortedList(
  withTimeLogger('shellSort', shellSort)(randomListInRange(10000000))
);

// 非基于比较的排序算法
checkSortedList(
  withTimeLogger('countSort', countSort)(randomListInRange(10000000))
);
checkSortedList(
  withTimeLogger('radixSort', radixSort)(randomListInRange(10000000))
);
checkSortedList(
  withTimeLogger('bucketSort', bucketSort)(randomListInRange(10000000), 1000)
);
