import radixSort from '../algorithm/radixSort.ts';
import {
  checkSortedList,
  randomListInRange,
  randomUint32ArrayInRange,
} from '../utils/index.ts';

Deno.test('radixSort in 10 numbers', () => {
  checkSortedList(radixSort(randomListInRange(10)));
});

Deno.test('radixSort in 100 numbers', () => {
  checkSortedList(radixSort(randomListInRange(100)));
});

Deno.test('radixSort in 1000 numbers', () => {
  checkSortedList(radixSort(randomListInRange(1000)));
});

Deno.test('radixSort in 10000 numbers', () => {
  checkSortedList(radixSort(randomListInRange(10000)));
});

Deno.test('radixSort in 10 numbers', () => {
  checkSortedList(radixSort(randomUint32ArrayInRange(10)));
});

Deno.test('radixSort in 100 numbers', () => {
  checkSortedList(radixSort(randomUint32ArrayInRange(100)));
});

Deno.test('radixSort in 1000 numbers', () => {
  checkSortedList(radixSort(randomUint32ArrayInRange(1000)));
});

Deno.test('radixSort in 10000 numbers', () => {
  checkSortedList(radixSort(randomUint32ArrayInRange(10000)));
});
