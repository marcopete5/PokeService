angular.module('pokeApp')

.service('pokeService', [function(){

	var pokeList = [];

	this.addPokemon = function(name){
			if (pokeList.indexOf(name) === -1) {
					pokeList.push(name);
					return pokeList
			} else {	
					return pokeList;
			}
	};

	this.removePokemon = function(name){
			for (var i = 0; i < pokeList.length; i++){
				if (pokeList[i] === name){
					pokeList.splice(name, 1);
				}
			}
			return pokeList
			
	};


}])