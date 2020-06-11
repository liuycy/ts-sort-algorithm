import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { multistep } from '../utils/index.ts';

Deno.test('Sample Case of multistep', () => {
  return new Promise((resolve) => {
    let steps = [
      (ref: { a: number }) => (ref.a = ref.a + 1),
      (ref: { a: number }) => (ref.a = ref.a * 7),
      (ref: { a: number }) => (ref.a = ref.a - 11),
    ];
    multistep(steps, [{ a: 0 }], (ref: { a: number }) => {
      assertEquals(ref.a, -4);
      resolve();
    });
  });
});
