import countSort from '../algorithm/countSort.ts';
import { checkSortedList, randomListInRange } from '../utils/index.ts';

Deno.test('countSort in 10 numbers', () => {
  checkSortedList(countSort(randomListInRange(10)));
});

Deno.test('countSort in 100 numbers', () => {
  checkSortedList(countSort(randomListInRange(100)));
});

Deno.test('countSort in 1000 numbers', () => {
  checkSortedList(countSort(randomListInRange(1000)));
});

Deno.test('countSort in 10000 numbers', () => {
  checkSortedList(countSort(randomListInRange(10000)));
});
