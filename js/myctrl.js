var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.recipes = [
        {
            "Title": "Bibimbap",
            "Description": "This is very tasty",
            "Primary-Type": "Asian",
            "Secondary-Type": "Rice",
            "Image": "bibimbap.jpg",
            "Count": 2
        },{
            "Title": "Classic burger",
            "Description": "Very rich in flavor",
            "Primary-Type": "American",
            "Secondary-Type": "Burgers",
            "Image": "burger.jpeg",
            "Count": 3
        },{
            "Title": "Chinese Fried Rice",
            "Description": "Good for lunch and dinner",
            "Primary-Type": "Asian",
            "Secondary-Type": "Rice",
            "Image": "fried-rice.jpg",
            "Count": 4
        }
    ]
});