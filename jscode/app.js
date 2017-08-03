var app = angular.module("myApp", []);

angular.module("myApp")
    .controller('MainController1',ctrlFunc);

function ctrlFunc(){
    this.message = "Helloi";
}