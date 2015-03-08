var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //run hashing function for index
  var i = getIndexBelowMaxForKey(k, this._limit);
  //check if there is already an object at that index

  if (!this._storage.get(i)) {  //if there's no object at the index
    //create an array to store multiple values with the same index
    var bucket = [];
    //set the bucket to be at the index
    this._storage.set(i, bucket);
  }
  var bucket = this._storage.get(i);
  //push the passed key value pair into the bucket
  bucket.push([k, v]);
};

HashTable.prototype.retrieve = function(k){
  var key = 0,     //these values are the indexes of the arrays that store the key value pairs
      value = 1;

  var i = getIndexBelowMaxForKey(k, this._limit);
  var itemAtIndex = this._storage.get(i);  //stores the bucket at the passed index for easy reference

  //loop through bucket (full of arrays with key-value pairs)
  for (var j = 0; j < itemAtIndex.length; j++) {
    //set temp variable that is the array of a key-value pair
    var subArray = itemAtIndex[j];
    //check the first index of the key-value array (the key is stored at index 0)
    if (k === subArray[key]) {
      return subArray[value];
    } 
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var key = 0,
      value = 1;

  var i = getIndexBelowMaxForKey(k, this._limit);

  var itemAtIndex = this._storage.get(i);  //stores the bucket at the passed index for easy reference

  //loop through bucket (full of arrays with key-value pairs)
  for (var j = 0; j < itemAtIndex.length; j++) {
    //set temp variable that is the array of a key-value pair
    var subArray = itemAtIndex[j];
    //check the first index of the key-value array (the key is stored at index 0)
    if (k === subArray[key]) {
      itemAtIndex.splice(j, 1);
    } 
  }  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
