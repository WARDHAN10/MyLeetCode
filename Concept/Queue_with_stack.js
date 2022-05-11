class Stack {
  constructor(arr) {
    this.item = arr;
    this.top = arr.length - 1;
    this.front = arr[this.top];
  }
  peek() {
    return this.front;
  }
  push(elem) {
    this.top++;
    this.front = elem;
    return this.item.push(elem);
  }
  pop() {
    if (this.top == -1) {
      return "under flow";
    }
    this.top--;

    return this.item.pop();
  }

  empty() {
    return this.top == -1;
  }
}

const popStack = (stk, pop) => {
  if (stk.top == 0) {
    return stk.pop();
  }
  var poped = stk.pop();
  popStack(stk, poped);
  stk.push(poped);
};
const stk = new Stack([4]);
popStack(stk, null);
stk.push(5);
stk.peek();

// we can implement 2 stack approch to make avg time complexity O(1) 
// 1 stack to make the push and one to make the pop operation

console.log(stk);
