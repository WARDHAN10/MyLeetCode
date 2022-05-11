class Queue {
  constructor() {
    this.arr = [];
  }

  push(x) {
    return this.arr.push(x);
  }
  pop() {
    if (this.empty()) {
      return -1;
    }
    return this.arr.shift();
  }
  empty() {
    return this.arr.length == 0;
  }
}

function LastOrderTraversal(arr, n) {
  const que = new Queue();
  var count = 0;
  var level = 0;
  var i = 0;
  while (count != n) {
    if (i > arr.length - 1) {
      i = 0;
      level = que.pop();
      console.log(level);
      count++;
    }
    que.push(level * 10 + arr[i]);
    // console.log(que);
    i++;
  }
}

console.log(LastOrderTraversal([1, 2, 3], 10));
