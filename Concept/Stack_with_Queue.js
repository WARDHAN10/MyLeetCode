class Queue {
  constructor(arr) {
    this.item = arr;
    this.head = arr.length - 1;
    this.tail = 0;
    this.count = arr.length;
  }
  // head(insertion) -----> tail(deletion)
  push(elem) {
    this.head++;
    this.count++;
    return this.item.push(elem);
  }

  pop() {
    const poped = this.item[this.tail];
   delete this.item[this.tail]
    this.tail++;
    this.count--;
    return poped;
  }

  Tail() {
    return this.item[this.tail];
  }
  Head() {
    return this.item[this.head];
  }

  empty() {
    return this.head > this.tail && this.count == 0;
  }
}

const popFront = (queue) => {
  if (queue.count == 1) {
    // console.log(queue);
    return;
  }
  const poped = queue.pop();
  popFront(queue);
  console.log(queue) 

  queue.push(poped);


  return;
};

const que = new Queue([1, 2, 3, 4]);
console.log(que);

// que.push(5);
// console.log(que);

// que.pop();
// console.log(que);
// que.pop()
// console.log(que);
// que.push(6)
// console.log(que);


// console.log(que.Tail())
// console.log(que.Head())
popFront(que);

console.log(que);
const arr = [];



// // class MyStack {
//   arr:any
//   constructor() {
//       this.arr = []    
//   }

//   push(x: number): void {
//     return  this.arr.push(x)
//   }

//   pop(): number {
//      return this.arr.pop()
//   }

//   top(): number {
//      return this.arr[this.arr.length -1]
//   }

//   empty(): boolean {
//   return this.arr.length == 0
//   }
// }

// /**
// * Your MyStack object will be instantiated and called as such:
// * var obj = new MyStack()
// * obj.push(x)
// * var param_2 = obj.pop()
// * var param_3 = obj.top()
// * var param_4 = obj.empty()
// */