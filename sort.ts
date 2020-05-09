import { withTimeLogger, randomListInRange } from './utils/index.ts';
import quickSort from './algorithm/quickSort.ts';
import countSort from './algorithm/countSort.ts';
import heapSort from './algorithm/heapSort.ts';
import mergeSort from './algorithm/mergeSort.ts';

withTimeLogger('quickSort', quickSort)(randomListInRange(10000000));
withTimeLogger('countSort', countSort)(randomListInRange(10000000));
withTimeLogger('heapSort', heapSort)(randomListInRange(10000000));
withTimeLogger('mergeSort', mergeSort)(randomListInRange(10000000));
