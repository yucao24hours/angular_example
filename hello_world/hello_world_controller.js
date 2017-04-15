// 第一引数: なにを対象にするかの名前（文字列ならなんでもいいけど、Angular の慣習に従って `App` という名前で呼ぶほうがわかりやすくなる
// ここでわたした名前を、.html ファイルの中で `ng-app` アトリビュートの引数として使うことになる。
// 第二引数: 依存関係のリスト
angular.module('HelloWorldApp', [])
  // 第一引数: コントローラ自身の名前。`Controller` という名前で終わるようにするとわかりやすい
  // 第二引数: コントローラに実装する関数。この関数はコントローラ自身がロードされたときに一度だけ呼ばれる。
  .controller('HelloWorldController', function($scope) {
    // ここで $scope に greeting というアトリビュートを追加していて、そこに値を入れている。.html でこれにアクセスできるようになる。
    $scope.greeting = "Hello World";
});
