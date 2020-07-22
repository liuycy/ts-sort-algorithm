import bucketSort from '../algorithm/bucketSort.ts';
import {
  checkSortedList,
  randomListInRange,
  randomUint32ArrayInRange,
} from '../utils/index.ts';

Deno.test('bucketSort in 10 numbers', () => {
  checkSortedList(bucketSort(randomListInRange(10)));
});

Deno.test('bucketSort in 100 numbers', () => {
  checkSortedList(bucketSort(randomListInRange(100)));
});

Deno.test('bucketSort in 1000 numbers', () => {
  checkSortedList(bucketSort(randomListInRange(1000)));
});

Deno.test('bucketSort in 10000 numbers', () => {
  checkSortedList(bucketSort(randomListInRange(10000)));
});

Deno.test('bucketSort in 10 numbers', () => {
  checkSortedList(bucketSort(randomUint32ArrayInRange(10)));
});

Deno.test('bucketSort in 100 numbers', () => {
  checkSortedList(bucketSort(randomUint32ArrayInRange(100)));
});

Deno.test('bucketSort in 1000 numbers', () => {
  checkSortedList(bucketSort(randomUint32ArrayInRange(1000)));
});

Deno.test('bucketSort in 10000 numbers', () => {
  checkSortedList(bucketSort(randomUint32ArrayInRange(10000)));
});
