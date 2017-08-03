app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular books this month.';
  $scope.product = {
    name:'The Book of Trees',
    price: 19
  }
}]);

app.controller('formController',['$form',function($form){
    $form.submit = function(){
    alert('asdf');
    //uname = document.getElementById('uname').value;
    //pswd = document.getElementById('pswd').value;
  }
}]);