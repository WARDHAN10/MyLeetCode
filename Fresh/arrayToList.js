class Node {
    constructor(val = null, next = null) {
      this.val = val;
      this.next = next;
    }
  }

  class LinkList {
    constructor(arr) {
      var newNode = new Node();
      this.head = newNode;
        for(var i =0;i<arr.length;i++){
            var NewestNode = new Node(arr[i])
            newNode.next = NewestNode
            newNode = NewestNode
        }
        this.head =this.head.next
        
    }




    print(){
        var temp = this.head
        var arr = []
        while(temp){
            arr.push(temp.val)
            temp = temp.next
        }
        console.log(arr)
    }
}



const ll = new LinkList([1,2,3,4])
ll.print()




