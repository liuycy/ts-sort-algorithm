import quickSort from './algorithm/quickSort.ts';
import { multistep, randomListInRange } from './utils/index.ts';
import type { NumberList } from './types.ts';

function buildSteps(list: NumberList, size = 10) {
  const steps = [] as Function[];
  const count = ~~(list.length / size) + 1;

  for (let i = 0; i < count; i++) {
    steps.push(function (ref: any) {
      const head = i * size;
      ref[i] = quickSort(list.slice(head, head + size));
    });
  }

  return steps;
}

console.time('multiple');
multistep(buildSteps(randomListInRange(1000000), 10000), [{}], (ref: any) => {
  console.log(ref);
  console.timeEnd('multiple');
});
