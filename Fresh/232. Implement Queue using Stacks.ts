class MyQueue {
    arr:any
    top:any
    constructor() {
        this.arr = []
        this.top = -1
    }

    push(x: number): void {
        this.top++
        return this.arr.push(x)

    }

    pop(): number {
    this.top--
        return this.arr.shift()
    }

    peek(): number {
    if(this.top == -1)
        return -1
        
    return this.arr[0]
    }

    empty(): boolean {
    return this.top == -1
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */