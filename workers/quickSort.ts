import quickSort from '../algorithm/quickSort.ts';
self.onmessage = (e) => {
  const [list, head, tail] = e.data;
  self.postMessage(quickSort(list.slice(head, tail)));
  self.close();
};
