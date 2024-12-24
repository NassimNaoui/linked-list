import { Node } from "./node";

export class LinkedList {
  constructor() {
    this.head = null;
    this.sizeList = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
    this.sizeList++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
    this.sizeList++;
  }

  size() {
    return this.sizeList;
  }

  getHead() {
    return this.head;
  }

  getTail(node = this.head) {
    if (node.nextNode === null) {
      return node;
    }
    return this.getTail(node.nextNode);
  }

  at(value, node = this.head, count = 0) {
    if (node === null) {
      throw new Error("Index out of bounds");
    }
    if (count === value) {
      return node;
    }
    return this.at(value, node.nextNode, count + 1);
  }

  pop() {
    if (!this.head) {
      throw new Error("The list is empty");
    }

    if (this.head.nextNode === null) {
      const value = this.head.value;
      this.head = null;
      this.sizeList--;
      return value;
    }

    let current = this.head;
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }

    const value = current.nextNode.value;
    current.nextNode = null;
    this.sizeList--;

    return value;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value == value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    if (this.contains(value)) {
      let current = this.head;
      let counter = 0;
      while (current.value != value) {
        current = current.nextNode;
        counter++;
      }
      return counter;
    } else {
      return null;
    }
  }

  toString() {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += `(${current.value})`;

      if (current.nextNode !== null) {
        result += " -> ";
      }

      current = current.nextNode;
    }

    result += " -> null";
    return result;
  }
}
