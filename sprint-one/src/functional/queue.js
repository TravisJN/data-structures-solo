var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    var temp = size;
    while(temp >= 0) {
      storage[temp] = storage[temp - 1];
      temp--;
    } 
    storage[0] = value;
    size++;
  };

  someInstance.dequeue = function(){
    if (size > 0) {
      size--;
      var result = storage[size];
      delete storage[size];
      return result;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};

//this is a change