class Queue {
  constructor() {
    this.arr = [];
  }

  push(x) {
    this.arr.push(x);
  }
  pop() {
    var poped = this.arr.shift()
  
    return poped
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
  empty() {
    return this.arr.length == 0;
  }
}

const que = new Queue();

que.push(1);
que.push(2);
que.push(3);

que.push(4);

que.push(5);

console.log(que);
console.log(que);

const reverse = (que) => {
  if (que.empty()) {
    return;
  }
  const poped = que.pop();
  console.log(poped)
  reverse(que);
  que.push(poped);
  return que;
};


console.log(reverse(que))
