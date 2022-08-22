class LinkedList {
  constructor(value = null) {
    this.head_node = new Node(value);
    this.tail_node = this.head_node;
    this.size_val = 1;
  }
  append(value) {
    let node = new Node(value);
    this.tail().nextNode = node;
    this.tail_node = node;
    this.size_val++;
  }

  prepend(value) {
    let node = new Node(value);
    node.nextNode = this.head();
    this.head_node = node;
    this.size_val++;
  }

  size() {
    return this.size_val;
  }

  head() {
    // console.log(this.head_node)
    return this.head_node;
  }

  tail() {
    //console.log(this.tail_node)
    return this.tail_node;
  }

  at(index) {
    if (index < 0 || index > this.size_val - 1) return null;
    let current_node = this.head();
    for (let i = 0; i < index; i++) {
      current_node = current_node.nextNode;
    }
    return current_node;
  }

  pop() {
    let current_node = this.at(this.size_val - 2);
    current_node.nextNode = null;
    this.tail_node = current_node;
  }

  contains(value) {
    let current_node = this.head();
    for (let i = 0; i < this.size_val; i++) {
      if (current_node.value === value) return true;
      current_node = current_node.nextNode;
    }
    return false;
  }

  find(value) {
    let current_node = this.head();
    for (let i = 0; i < this.size_val; i++) {
      if (current_node.value === value) return current_node;
      current_node = current_node.nextNode;
    }
    return null;
  }

  toString() {
    let string = "";
    let current_node = this.head();
    for (let i = 0; i < this.size_val; i++) {
      string += `(${current_node.value}) -> `;
      current_node = current_node.nextNode;
    }
    string += "null";
    return string;
  }
  insertAt(value, index) {
    let new_node = new Node(value);
    let temp = this.at(index);
    let prev_node = this.at(index - 1);
    prev_node.nextNode = new_node;
    new_node.nextNode = temp;
  }

  removeAt(index) {
    this.size_val--;
    if (index === 0) return (this.head_node = this.at(index + 1));
    else if (index === this.size_val + 1) return this.pop();
    let prev_node = this.at(index - 1);
    let next_node = this.at(index + 1);
    prev_node.nextNode = next_node;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
