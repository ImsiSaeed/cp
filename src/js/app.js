var app = angular.module('cp', [
	'ngRoute',
	'ngMaterial',
]);

app.controller('CPController', function ($scope, $rootScope, $mdSidenav, $location) {
	var cp = this;

	$rootScope.title = "CP";
	$scope.imagePath = './src/img/washedout.png';

	cp.menu = function () {
		$mdSidenav('sideNav').toggle();
	}

	cp.goTo = function (page) {
		$location.path(page);
	}

});

app.config([
			 '$mdThemingProvider',
		function ($mdThemingProvider) {
		$mdThemingProvider
			.theme('default')
			.primaryPalette('blue')
			.accentPalette('pink')
			.warnPalette('orange')
			.backgroundPalette('grey');
	}
]);