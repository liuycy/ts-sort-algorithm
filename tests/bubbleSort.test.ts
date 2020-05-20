import bubbleSort from '../algorithm/bubbleSort.ts';
import { checkSortedList, randomListInRange } from '../utils/index.ts';

Deno.test('bubbleSort in 10 numbers', () => {
  checkSortedList(bubbleSort(randomListInRange(10)));
});

Deno.test('bubbleSort in 100 numbers', () => {
  checkSortedList(bubbleSort(randomListInRange(100)));
});

Deno.test('bubbleSort in 1000 numbers', () => {
  checkSortedList(bubbleSort(randomListInRange(1000)));
});

Deno.test('bubbleSort in 10000 numbers', () => {
  checkSortedList(bubbleSort(randomListInRange(10000)));
});
