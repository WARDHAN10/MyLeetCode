class Stack {
  constructor(length) {
    this.item = [];
    this.top = -1;
    this.stkLen = length;
  }

  push(elem) {
    if (top == this.stkLen - 1) {
      return "overflow";
    }
    this.top++;
    return this.item.push(elem);
  }
  pop() {
    if (this.top == -1) {
      return "underflow";
    }
    this.top--;
    return this.item.pop();
  }
  Top() {
    return this.top;
  }
  empty() {
    return this.top == -1;
  }
}

const stack = new Stack();

stack.push(5);
console.log(stack.top);
