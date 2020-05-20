import selectSort from '../algorithm/selectSort.ts';
import { checkSortedList, randomListInRange } from '../utils/index.ts';

Deno.test('selectSort in 10 numbers', () => {
  checkSortedList(selectSort(randomListInRange(10)));
});

Deno.test('selectSort in 100 numbers', () => {
  checkSortedList(selectSort(randomListInRange(100)));
});

Deno.test('selectSort in 1000 numbers', () => {
  checkSortedList(selectSort(randomListInRange(1000)));
});

Deno.test('selectSort in 10000 numbers', () => {
  checkSortedList(selectSort(randomListInRange(10000)));
});
