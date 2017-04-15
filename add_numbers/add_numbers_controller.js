angular.module('AddNumbersApp', [])
  .controller('AddNumbersController', function($scope) {
    $scope.AddNumbers = function() {
      var a = Number($scope.a || 0);
      var b = Number($scope.b || 0);
      $scope.sum = a + b;
    }
});
// 単に controller の中に足し算の処理を書くだけじゃだめで、ng-keyup で動く関数を定義して、HTML 側で指定してあげないといけない。
// リアルタイムに値を JS 側と同期させて使うためにはこれが必要ってことなんだろうか。
// ということは逆に言うと、keyup を使わないとリアルタイムには同期されない？そんなことはなかったよね、最初のほうの例だと。。
// [理由] 確かに今までも、input に入れた値をそのままリアルタイムに画面に出すということをしていたけど、それはあくまでも「HTML でバインディングした値をそのまま使う」という処理だったからなのかもしれない。
// ここでは JS 側に値を渡して JS 側で足し算の処理を「リアルタイムに == 入力されたらすぐに」しないといけないから、keyup イベントで随時値を飛ばしてやらないと計算処理ができないってことなのかも。（実際、function を定義しないでそのまま書いても処理は走らない）
