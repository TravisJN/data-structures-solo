var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	var addedChild = Tree(value);
	this.children.push(addedChild);
};

treeMethods.contains = function(target){
	var isFound = false;

	var checkNode = function(testNode) {
		if (testNode.value === target) {
			isFound = true;
		} else {
			for (var i = 0; i < testNode.children.length; i++) {
				if (testNode.children.length > 0) {
					checkNode(testNode.children[i]);
				}
			}
		}
	}

	checkNode(this);
	return isFound;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
