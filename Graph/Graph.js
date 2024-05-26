class Graph {
	constructor() {
		this.nodes = new Map();
	}

	
	addNode(nodo) {
		this.nodes.set(nodo, []);
	}
}
