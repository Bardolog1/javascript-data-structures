class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  addElementStack(value) {
    let newN = new Node(value);
    newN.next = this.top;
    this.top = newN;
  }

  view() {
    let current = this.top;
    while (current != null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let first = null;

const stack = new Stack();
stack.addElementStack(5);
stack.addElementStack(21);
stack.addElementStack(6);
stack.addElementStack(8);
stack.addElementStack(10);
stack.addElementStack(33);
stack.addElementStack(19);
stack.view();
