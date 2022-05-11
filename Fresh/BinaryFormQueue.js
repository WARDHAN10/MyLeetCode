class Queue {
  constructor(arr) {
    this.arr = arr;
  }

  push(x) {
    return this.arr.push(x);
  }
  pop() {
    return this.arr.pop();
  }

  empty() {
    return this.arr.length == 0;
  }
}

function BinaryForm(n) {
  const que = new Queue([1]);
  var count = 0;
  var bin = 0;
  var pop = 1;
  while (count != n) {
    if (bin == 2) {
      bin = 0;
      pop = que.pop();
      console.log(pop);
      count++;
    }
    que.push((pop * 10) + bin);
    console.log(que);

    bin++;
  }
}

console.log(BinaryForm(10));
