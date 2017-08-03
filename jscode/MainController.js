var uname;
var pswd;
app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular books this month.';
  $scope.product = {
    name:'The Book of Trees',
    price: 19
  }
  $scope.submit = function(){
    uname = document.getElementById('uname').value;
    pswd = document.getElementById('pswd').value;
    validate();
  }
  alert('Blood donators app');
}]);

function validate(){
  if(uname === 'Admin' && pswd === "admin"){
        window.location = "admin.html";
    }
    else if(uname === 'user' && pswd === "user"){ // will look into the database for this
        window.location = "user.html";
    }
    else
        alert('User credentials mismatch\n please try again');
}