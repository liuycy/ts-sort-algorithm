import quickSort from '../algorithm/quickSort.ts';
import { checkSortedList, randomListInRange } from '../utils/index.ts';

Deno.test('quickSort in 10 numbers', () => {
  checkSortedList(quickSort(randomListInRange(10)));
});

Deno.test('quickSort in 100 numbers', () => {
  checkSortedList(quickSort(randomListInRange(100)));
});

Deno.test('quickSort in 1000 numbers', () => {
  checkSortedList(quickSort(randomListInRange(1000)));
});

Deno.test('quickSort in 10000 numbers', () => {
  checkSortedList(quickSort(randomListInRange(10000)));
});
