var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //debugger;
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[i]) {
    var bucket = [];
    bucket.push(this._storage[i]);
    bucket.push([k, v]);
    this._storage[i] = bucket;
  } else {
    this._storage[i] = [k, v];
  }
};

HashTable.prototype.retrieve = function(k){
  var key = 0,     //these values are the indexes of the arrays that store the key value pairs
      value = 1;

  var i = getIndexBelowMaxForKey(k, this._limit);
  var itemAtIndex = this._storage[i];  //stores the value at the passed index for easy reference

  if (k === itemAtIndex[key]) {
    console.log(itemAtIndex[value]);
    return itemAtIndex[value];
  } else if (this._storage[i]) {
    for (var j = 0; j < itemAtIndex.length; j++) {
      if (itemAtIndex[j] && itemAtIndex[j][key] === k) {
        return itemAtIndex[j][value];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
	var key = 0,
      value = 1;

  var i = getIndexBelowMaxForKey(k, this._limit);
	if (this._storage[i][key] === k) {
    this._storage[i][key] = null;
  } else if (this._storage[i]) {
    for (var j = 0; j < this._storage[i].length; j++) {
      if (this._storage[i][j][key] === k) {
        this._storage[i][j][key] = null;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
