angular.module('InMemoryCounterApp', [])
  .controller('InMemoryCounterController', function($scope) {
    // ここで 0 をセットしないと counter が init されいないので、計算式がおかしくなることがある。
    $scope.counter = 0;
    $scope.decrement = function () {
      $scope.counter--;
    };
});
