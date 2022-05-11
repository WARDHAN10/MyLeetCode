class Queue {
  constructor(arr) {
    this.item = arr;
    this.count = arr.length;
    this.enqueue = arr.length - 1;
    this.dequeue = 0;
  }
  push(elem) {
    this.enqueue++;
    this.count++;
    return this.item.push(elem);
  }
  pop() {
    if (this.empty()) {
      return "underflow";
    }

    const poped = this.item[this.dequeue];
    delete this.item[this.dequeue];
    this.dequeue++;
    this.count--;
    return poped;
  }

  empty() {
    return this.dequeue > this.enqueue && this.count == 0;
  }
}

const que = new Queue([1, 2, 3, 4]);
// console.log(que);
// que.push(5);
// console.log(que);
// que.pop();
// console.log(que);
// que.push(6);
// console.log(que);
// que.pop();
// console.log(que);

// que.pop();
// console.log(que);

const reverseQueue = (queue,pop) => {
  if (queue.count == 0) {
    return;
  }
  const poped = queue.pop();
  reverseQueue(queue,poped);
  console.log(queue.item,queue.count)
  queue.push(poped);
  return queue
};

console.log(reverseQueue(que, null));
console.log(que);
