class Node {
  constructor(data = null) {
    this.prev = null;
    this.val = data;
    this.next = null;
  }
}

class FrontMiddleBackQueue {
  constructor(data) {
    // const newNode = new Node()
    this.head = null;
    this.tail = null;
  }
  getSize(head) {
    var count = 0;
    while (head) {
      head = head.next;
      count++;
    }
    return count;
  }
  pushFront(val) {
    var newNode = new Node(val);
    // list empty
    if (this.head == null && this.tail == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      var temp = this.head;
      newNode.next = temp;
      temp.prev = newNode;
      this.head = newNode;
    }
    return this.head;
  }

  pushBack(val) {
    var newNode = new Node(val);

    if (this.head == null && this.tail == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      var temp = this.tail;
      temp.next = newNode;
      newNode.prev = temp;
      this.tail = newNode;
    }
    return this.head;
  }

  pushMiddle(val) {
    var newNode = new Node(val);
    // empty
    if (this.head == null && this.tail == null) {
      this.head = newNode;
      this.tail = newNode;
    }
    // add only one node
    else if (this.head.next == null) {
        var temp = this.head;
        newNode.next = temp;
        temp.prev = newNode;
        this.head = newNode;
    } else {
      var temp = this.head;
      var temp1 = this.head;
      var size = this.getSize(temp);
      var middle = parseInt(size / 2);

      if(size % 2 != 0){
        middle = Math.ceil(size / 2)
      }    
        if (middle == 0) {
        middle = 1;
      }
      var count = 0;
      while (temp1) {
        count++;

        if (count == middle) {
          break;
        }
        temp1 = temp1.next;
      }
      // console.log("this is tempo",temp1)
      const next = temp1.next;
      temp1.next = newNode;
      newNode.prev = temp1;
      newNode.next = next;
      next.prev = newNode;
      // console.log(next)
    }
    return this.head;
  }

  popFront() {
    if (this.head == null && this.tail == null) {
      return -1;
    } else if (this.head.next == null) {
      return -1;
    } else {
      const removedElement = this.head;

      this.head = this.head.next;
      this.head.prev = null;
      return removedElement.val;
    }
  }
  popBack() {
    if (this.head == null && this.tail == null) {
      return -1;
    } else if (this.head.next == null) {
        const removedElement = this.tail; 

        this.head = null
        this.tail = null
      return removedElement.val;
    } else {
      const removedElement = this.tail; 
      this.tail = this.tail.prev;
      this.tail.next = null;
      return removedElement.val;
    }
  }
  popMiddle() {
    if (this.head == null && this.tail == null) {
      return -1;
    } else if (this.head.next == null) {
        const removedElement = this.head; 

        this.head = null
        this.tail = null
      return removedElement.val;
    } else {
      var temp = this.head;
      var temp1 = this.head;
      var prevNode = null;
      var size = this.getSize(temp);
      var middle = parseInt(size / 2);

      if(size % 2 != 0){
        middle = Math.ceil(size / 2)
      }
      console.log("middle",middle)
      if (middle == 0) {
        middle = 1;
      }
      var count = 1;
      while (temp1) {

        if (count == middle) {
          break;
        }
        count++;

        prevNode = temp1;
        temp1 = temp1.next;
      }

      if (prevNode === null) {
        const removedElement = this.head;

        this.head = this.head.next;
        this.head.prev = null;
        return removedElement.val;

      } else {
        const removedElement = temp1;
        temp1.next.prev = prevNode;
        prevNode.next = temp1.next;
        return removedElement.val;
      }
    }
  }
  printForward() {
    var temp = this.head;
    var arr = [];
    while (temp) {
      arr.push(temp.val);
      temp = temp.next;
    }
    return arr;
  }
  printBackward() {
    var temp = this.tail;
    var arr = [];
    while (temp) {
      arr.push(temp.val);
      temp = temp.prev;
    }
    return arr.reverse();
  }
}

// Your FrontMiddleBackQueue object will be instantiated and called as such:
var obj = new FrontMiddleBackQueue();
// obj.pushFront(1);
// obj.pushBack(2);
obj.pushMiddle(1);

obj.pushMiddle(2);
obj.pushMiddle(3);
console.log(obj.printBackward());
// console.log(obj.popFront())
console.log(obj.popMiddle())
console.log(obj.popMiddle())
console.log(obj.popMiddle())

// console.log(obj.popBack())
// console.log(obj.popFront())



// // obj.popFront()
// // obj.popBack()

// console.log(obj.printForward())
console.log(obj.printBackward());

// var param_4 = obj.popFront()
// var param_5 = obj.popMiddle()
// var param_6 = obj.popBack()
 