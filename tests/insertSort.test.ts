import insertSort from '../algorithm/insertSort.ts';
import { checkSortedList, randomListInRange } from '../utils/index.ts';

Deno.test('insertSort in 10 numbers', () => {
  checkSortedList(insertSort(randomListInRange(10)));
});

Deno.test('insertSort in 100 numbers', () => {
  checkSortedList(insertSort(randomListInRange(100)));
});

Deno.test('insertSort in 1000 numbers', () => {
  checkSortedList(insertSort(randomListInRange(1000)));
});

Deno.test('insertSort in 10000 numbers', () => {
  checkSortedList(insertSort(randomListInRange(10000)));
});
