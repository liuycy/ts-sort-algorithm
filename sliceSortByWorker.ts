import { randomListInRange } from './utils/index.ts';

function buildSteps(list: number[], size = 10) {
  const count = ~~(list.length / size) + 1;
  const url = new URL('./workers/quickSort.ts', import.meta.url).href;
  const result = [] as Promise<any>[];

  for (let i = 0; i < count; i++) {
    const head = i * size;

    const worker = new Worker(url, { type: 'module' });
    worker.postMessage([list, head, head + size]);

    result.push(
      new Promise((resolve, reject) => {
        worker.onmessage = (e) => resolve(e.data);
        worker.onerror = reject;
      })
    );
  }

  return result;
}

console.time('sliceSortByWorker');
console.log(await Promise.all(buildSteps(randomListInRange(1000000), 250000)));
console.timeEnd('sliceSortByWorker');
