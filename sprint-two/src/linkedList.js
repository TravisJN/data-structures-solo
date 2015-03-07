var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //create a new node with value
    //set previous tail's pointer to newNode
    //if tail = null then set head pointer to newNode
    var newNode = new Node(value);
    list.tail = newNode;
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.head.next = newNode;
    }
  };

  list.removeHead = function(){
    var results = list.head.value;
    list.head = list.head.next;
    return results;
  };

  list.contains = function(target){
    var startNode = list.head;  //starting node
    var found = false;

    var checkNode = function(test) {
      if (test.value === target) {
        found = true;
      } else if (test.next) {
        checkNode(test.next);
      }
    };

    checkNode(startNode);
    return found;
    
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
