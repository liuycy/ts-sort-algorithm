import shellSort from '../algorithm/shellSort.ts';
import { checkSortedList, randomListInRange } from '../utils/index.ts';

Deno.test('shellSort in 10 numbers', () => {
  checkSortedList(shellSort(randomListInRange(10)));
});

Deno.test('shellSort in 100 numbers', () => {
  checkSortedList(shellSort(randomListInRange(100)));
});

Deno.test('shellSort in 1000 numbers', () => {
  checkSortedList(shellSort(randomListInRange(1000)));
});

Deno.test('shellSort in 10000 numbers', () => {
  checkSortedList(shellSort(randomListInRange(10000)));
});
