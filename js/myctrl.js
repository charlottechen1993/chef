var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.recipes = [
        {
            "Title": "Bibimbap",
            "Description": "This is very tasty"
        },{
            "Title": "Chinese Fried Rice",
            "Description": "Good for lunch and dinner"
        },{
            "Title": "Hamburger",
            "Description": "Very rich in flavor"
        }
    ]
});