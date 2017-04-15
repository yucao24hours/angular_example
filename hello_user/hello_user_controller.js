angular.module('HelloUserApp', [])
  .controller('HelloUserController', function($scope) {
    $scope.NameChange = function () {
      // $scope にはやせるアトリビュートは事前に attr_accessor 的なもので定義したりしなくていいので、
      // 自由にアクセスできる
      // この name は、HTML 側で ng-model を使ってデータバインディングされているため値を使うことができる
      $scope.greeting = "Hello " + $scope.name;
    };
});
