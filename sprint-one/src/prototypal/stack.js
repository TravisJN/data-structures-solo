var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var results = Object.create(stackMethods);
  results.indexCounter = 0;
  results.storage = {};

  return results;
};

var stackMethods = {
	push : function(value) {
		this.storage[this.indexCounter] = value;
		this.indexCounter++;
	},
	pop : function() {
		if (this.indexCounter > 0){
			this.indexCounter--;
			var temp = this.storage[this.indexCounter];
			delete this.storage[this.indexCounter];
			return temp;
		}
	},
	size : function() {
		return this.indexCounter;
	}
};


