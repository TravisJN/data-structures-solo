var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 
  var bigStack = {
  	indexCounter: 0,
  	storage: {}
  };
  _.extend(bigStack, stackMethods);
  return bigStack;
};

var stackMethods = {

push : function(value){
		this[this.indexCounter] = value;
		this.indexCounter++;
},

pop : function(){
	if(this.indexCounter>0){
			this.indexCounter--;
			var results = this[this.indexCounter];
			delete this[this.indexCounter];
			return results;
		}

},
size : function(){
	 return this.indexCounter;
}

};