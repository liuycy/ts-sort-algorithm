import mergeSort from '../algorithm/mergeSort.ts';
import { checkSortedList, randomListInRange } from '../utils/index.ts';

Deno.test('mergeSort in 10 numbers', () => {
  checkSortedList(mergeSort(randomListInRange(10)));
});

Deno.test('mergeSort in 100 numbers', () => {
  checkSortedList(mergeSort(randomListInRange(100)));
});

Deno.test('mergeSort in 1000 numbers', () => {
  checkSortedList(mergeSort(randomListInRange(1000)));
});

Deno.test('mergeSort in 10000 numbers', () => {
  checkSortedList(mergeSort(randomListInRange(10000)));
});
