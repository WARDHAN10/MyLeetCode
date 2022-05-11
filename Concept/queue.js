class Queue {
  constructor(arr) {
    this.item = arr;
    this.front = arr.length - 1;
    this.back = 0;
    this.length = arr.length - 1;
  }
  push(elem) {
    this.front++;
    this.item.push(elem);
    return;
  }
  pop() {
    if (this.empty()) {
      return "under flow";
    }
    this.back++;
    this.item.pop();
  }
  full() {
    return this.back == this.length;
  }
  empty() {
    return this.back == this.front;
  }
}

const que = new Queue([1, 2, 3, 4]);
console.log(que);
que.pop();  
console.log(que);
que.push(1);
console.log(que);
