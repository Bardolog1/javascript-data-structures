class Nodo {

  constructor(val) {
    this.val = val;
    this.next = null;
  }
  
}

let first = null;

function addElement(val) {
  let node = new Nodo(val);
  node.next = first;
  first = node;
}

function view() {
  let last = first;
  while (last != null) {
    console.log(last.val);
    last = last.next;
  }
}

function deleteE() {
  first = first.next;
}

const list = new Nodo(3);
addElement(2);
addElement(10);
addElement(15);
addElement(28);
addElement(9);
addElement(12);
addElement(25);
addElement(33);
view();
console.log(first);
