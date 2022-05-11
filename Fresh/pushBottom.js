class Stack {
  constructor(arr) {
    this.item = arr;
    this.top = arr.length-1;
  }
  push(elem) {
    this.top++;
    return this.item.push(elem);
  }
  pop() {
    this.top--;

    return this.item.pop();
  }
  isEmpty() {
    return this.top == -1;
  }
  Top() {
    return this.item[this.top];
  }

}

const stk = new Stack([1,2,3,4]);
console.log(stk.Top());

const pushBottom = (stk,n) => {
  if (stk.top == -1) {
    return stk.push(5);
  }
  n = stk.pop();
  pushBottom(stk,n);

  stk.push(n)
};



pushBottom(stk)
console.log(stk)