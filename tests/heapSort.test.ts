import heapSort from '../algorithm/heapSort.ts';
import { checkSortedList, randomListInRange } from '../utils/index.ts';

Deno.test('heapSort in 10 numbers', () => {
  checkSortedList(heapSort(randomListInRange(10)));
});

Deno.test('heapSort in 100 numbers', () => {
  checkSortedList(heapSort(randomListInRange(100)));
});

Deno.test('heapSort in 1000 numbers', () => {
  checkSortedList(heapSort(randomListInRange(1000)));
});

Deno.test('heapSort in 10000 numbers', () => {
  checkSortedList(heapSort(randomListInRange(10000)));
});
