var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	
	var results = Object.create(queueMethods);
	results.storage = {};
	results.indexCounter = 0;
	return results

};

var queueMethods = {
	enqueue: function(value){
		var tempIndex = this.indexCounter;
		while (tempIndex>0){
			this.storage[tempIndex] = this.storage[tempIndex -1];
			tempIndex--;
		}
		this.indexCounter++;
		this.storage[0] = value;
	}
	,
	dequeue: function(){
		if (this.indexCounter > 0){
			this.indexCounter--;
			var temp = this.storage[this.indexCounter];
			delete this.storage[this.indexCounter];
			return temp;
	}
	}
	,
	size: function(){
		return this.indexCounter;

	}



};


