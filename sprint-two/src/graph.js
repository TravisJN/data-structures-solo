

var Graph = function(){
	this.storage = {
		//connections : []
	};
};

Graph.prototype.addNode = function(node){
	var connections = [];
	this.storage[node] = connections;
};

Graph.prototype.contains = function(node){
	for (var key in this.storage) {
		if (key === node) {
			return true;			
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	if (_.contains(this.storage[fromNode], toNode)) {
		return true;
	} else {
		return false;
	}
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.storage[fromNode].push(toNode);
	this.storage[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	var index = _.indexOf(this.storage[fromNode], toNode);
	this.storage[fromNode].splice(index, 1);
};

Graph.prototype.forEachNode = function(cb){
	for (var key in this.storage) {
		cb(key);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



