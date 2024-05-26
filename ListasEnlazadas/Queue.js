//estructura de datos FIFO

class Queue {
  constructor() {
    this.queue = [];
  }

  addElementQueue(val) {
    this.queue.push(val);
  }

  deleteElementQueue() {
    return this.queue.shift();
  }

  viewQueue() {
    this.queue.map((val) => {
      console.log(val);
    });
  }
}

let queue = new Queue();
queue.addElementQueue(1);
queue.addElementQueue(8);
queue.addElementQueue(30);
queue.addElementQueue(2);
queue.viewQueue();
queue.deleteElementQueue();
queue.deleteElementQueue();
queue.viewQueue();
queue.addElementQueue(100);
queue.addElementQueue(33);
queue.viewQueue();

