class Node {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}
class LinkList {
  constructor(len = 0) {
    const newNode = new Node();
    this.head = newNode;
    this.head.next = null;
    this.length = len;
  }

  addAtTail(val) {
    const newNode = new Node(val);

    var temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
    return this.head.next;
  }
  print() {
    return this.head.next;
  }
  deleteAtTail() {
    var temp = this.head;
    if (this.head.next == null) return null;

    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = null;
    return this.head.next; 
  }
}

const List1 = new LinkList();
List1.addAtTail(5);
List1.addAtTail(6);
List1.addAtTail(7);
List1.deleteAtTail();

console.log(List1.print());
