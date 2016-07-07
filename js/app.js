var app = angular.module('furnitureApp',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'views/slider.html',
		controller:'SliderViewController'
	})
	.when('/products',{
		templateUrl: 'views/products.html',
		controller: 'ProductsViewController'
	})
	.when('/contact',{
		templateUrl: 'views/contact.html',
		controller: 'ContactViewController'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);

app.controller('HomeViewController', ['$scope', function($scope){
 $scope.appTitle = 'KIKEA';
}]);

app.controller('SliderViewController', ['$scope', function($scope){
}]);

app.controller('ProductsViewController', ['$scope', "$http", function($scope, $http){
	$http.get("js/furniture.json").success(function(data){
		$scope.products = data;	
	});
}]);

app.controller('ContactViewController', ['$scope', function($scope){

}]);