angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function() {
    Links.addOne($scope.link)
    .then(function(newLink) {
      $scope.link.code = newLink;
      $scope.link.url = '';
    });
  };
});
