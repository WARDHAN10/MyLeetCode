interface data{

}


class MyCircularQueue {
  arr: any;
  size: number;
  front: number;
  back: number;
  constructor(k: number) {
    this.arr = [];
    this.size = k;
    this.front = 0;
    this.back = 0;
    this.data:data =
  }

  enQueue(value: number): boolean {
    if (this.arr.length == this.size) {
      return false;
    }
    this.front = (this.back + 1) % this.size;
    this.arr.push(value);
    return true;
  }

  deQueue(): boolean {
    if (this.arr.length == 0) {
      return false;
    }
    this.back = (this.front + 1) % this.size;

    this.arr.shift();
    return true;
  }

  Front(): number {
    return this.arr[this.front];
  }

  Rear(): number {
    return this.arr[this.arr.length - 1];
  }

  isEmpty(): boolean {
    return this.arr.length == 0;
  }

  isFull(): boolean {
    return this.arr.length == this.size;


  }
// }
var rrr = [1,2]
rrr.splice(0,3)
console.log(rrr)
/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
