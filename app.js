var app = angular.module('pokeApp', []);

app.controller('mainController', ['$scope', '$http', 'pokeService', function ($scope, $http, pokeService){


	$scope.addPokemon = function(name) {
		$scope.pokemon = pokeService.addPokemon(name);
	};

	$scope.removePokemon = function(name) {
		$scope.pokemon = pokeService.removePokemon(name);
	}

	

}]);