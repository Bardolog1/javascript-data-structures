class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	root = null; 
	add(value) {
		let newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			this.addNode(this.root, newNode);
		}
	}

	addNode(node, newN) {
		if (newN.value < node.value) {
			if (node.left === null) {
				node.left = newN;
			} else {
				this.addNode(node.left, newN);
			}
		} else {
			if (node.right === null) {
				node.right = newN;
			} else {
				this.addNode(node.right, newN);
			}
		}
	}
	findElementNode(value, node) {
		if (node != null) {
			if (value < node.value) {
				return this.findElementNode(value, node.left);
			} else {
				if (value > node.value) {
					return this.findElementNode(value, node.right);
				} else {
					return node;
				}
			}
		} else {
			console.log(" Not found");
			return null;
		}
	}
}

const tree = new Tree();

tree.add(3);
tree.add(1);
tree.add(22);
tree.add(18);
tree.add(2);
tree.add(10);
tree.add(8);

console.log(tree.findElementNode(3, tree.root));
