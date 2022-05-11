class Node {
  constructor(data = null) {
    this.prev = null;
    this.val = data;
    this.next = null;
  }
}

class D_LinkList {
  constructor(capacity, val=null) {
    const newNode = new Node(val);
    this.head = newNode;
    this.tail = newNode;
    this.MaxSize = capacity;
  }

  getsize(head) {
    var count = 0;
    while (head) {
      head = head.next;
      count++;
    }
    return count;
  }
  insertHead(val) {
    var newNode = new Node(val);
    var temp = this.head;
    newNode.next = temp;
    temp.prev = newNode;
    this.head = newNode;
    // console.log("Insert at head", this.head);
    return this.head;
  }

  insertTail(val) {
    var newNode = new Node(val);
    var temp = this.tail;
    temp.next = newNode;
    newNode.prev = temp;
    this.tail = newNode;
    // console.log("Insert at tail", this.head);
    return this.head;
  }

  moveToTail(val) {
    var temp = this.head;
    var prevNode = null;

    while (temp) {
      if (temp.val === val) {
        break;
      }
      prevNode = temp;
      temp = temp.next;
    }

    if (temp.next == null && temp.prev == null) {
      return this.head;
    }
    if (temp.next == null) {
      return this.head;
    }
    if (temp.prev == null) {
      this.head = this.head.next;
      this.head.prev = null;
      var tailNode = this.tail;
      tailNode.next = temp;
      temp.prev = tailNode;
      this.tail = temp;
      console.log(this.head, this.tail);

      return this.head;
    }

    prevNode.next = temp.next;
    temp.next.prev = prevNode;
    var tailNode = this.tail;
    tailNode.next = temp;
    temp.next = null;
    temp.prev = tailNode;
    this.tail = temp;
    console.log(this.head);

    return this.head;
  }

  insertNode(val) {
    var temp = this.head;
    const size = this.getsize(temp);
    if (size == this.MaxSize) {
    }
  }

  deleteHead() {
    const deletedNode = this.head.val
    this.head = this.head.next;
    this.head.prev = null;
    return deletedNode;
  }

  deleteNode(val) {
    var temp = this.head;
    var prevNode = null;
    moveToTail;
    prevNode = temp;
    temp = temp.next;

    if (temp.prev == null && temp.next == null) {
      return null;
    }
    if (temp.prev == null) {
      this.head = this.head.next;
      return this.head;
    }
    if (temp.next == null) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      return this.head;
    }
    prevNode.next = temp.next;
    temp.next.prev = prevNode;
    return preserveHead;
  }
  print() {
    var temp1 = this.tail;
    var arr = [];
    while (temp1) {
      arr.push(temp1.val);
      temp1 = temp1.prev;
    }
    return arr;
  }
}

class LRUCache {
  constructor(capacity) {
    this.DLinkList = new D_LinkList();
    this.HasHMap = {};
    this.HasHMapLen = 0
    this.size = capacity;
  }
  get(val) {
    if (!this.HasHMap[val]) {
      return -1;
    }
    this.DLinkList.moveToTail(val);
    return this.HasHMap[val];
  }
  put(key, value) {
    if (this.HasHMap[key]) {
      this.HasHMap[key] = value;
      this.DLinkList.moveToTail(key);
    }else{
        if(this.HasHMapLen == this.size){
            delete this.HasHMap[this.DLinkList.deleteHead()]
            this.DLinkList.insertTail(key)
            this.HasHMap[key] = value
        }else{
            this.HasHMap[key] = value
            if (this.DLinkList.getsize() == 0){
                this.DLinkList.insertHead(key)
                this.DLinkList.head.next =null
                this.DLinkList.head.prev =null
            }else{
                this.DLinkList.insertTail(key)
            }
            this.HasHMapLen++

        }
       
    }
    console.log(this.HasHMap)
    return this.DLinkList.head
  }
}

const doubly = new D_LinkList(5, 1);
// doubly.insertHead(2);
// doubly.insertHead(3);
// doubly.insertTail(5);
// // doubly.deleteHead();
// // doubly.deleteNode(5);
// doubly.moveToTail(3);
// doubly.moveToTail(1);
const LRUCacheObj = new LRUCache(5)
console.log(LRUCacheObj.put(1,1))
console.log(LRUCacheObj.put(2,2))

console.log(LRUCacheObj.get(1))
