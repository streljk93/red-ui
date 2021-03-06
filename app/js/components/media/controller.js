"use strict";

angular.module('jk_site').controller('MediaController', function PortfolioController($scope, MediaListService, $timeout) {

	var ctrl = this;
	
	$scope.loaded = {};

	$scope.media = {
		sporthall: {
			list: [],
			stack: [],
			clone: [],
		},
		comment: {
			list: [],
		},
	};

	$scope.getPortfolio = function() {
		MediaListService.loadByGroup('спортзал').then(function(response) {
			$scope.loaded.sporthall = true;
			if(response.data.success) {
				$scope.media.sporthall.list = response.data.info;
				$scope.media.sporthall.clone = angular.copy(response.data.info);

				$scope.pushImage('sporthall', 8);
				$timeout(function() {
					bemMediaComponent();
				});
			}
		});
	};
	$scope.getPortfolio();

	$scope.pushImage = function(space, len) {
		len = len || 8;
		for(var i = 0; i < len; i++) {
			if($scope.media[space].clone.length === 0) return;

			var media = $scope.media[space].clone.shift();
			$scope.media[space].stack.push(media);
		}
	};

	$scope.addImage = function() {
		$scope.pushImage('sporthall', 8);
		$timeout(function() {
			bemMediaComponent();
		});
	};

});