app.controller("recipesCtrl", function($scope) {
    $scope.recipes = [
        {
            Title: "Bibimbap",
            Description: "This is very tasty",
            Primary: "Asian",
            Secondary: "Rice",
            Image: "bibimbap.jpg",
            Count: 2
        },{
            Title: "Classic burger",
            Description: "Very rich in flavor",
            Primary: "American",
            Secondary: "Burgers",
            Image: "burger.jpeg",
            Count: 8
        },{
            Title: "Chinese Fried Rice",
            Description: "Good for lunch and dinner",
            Primary: "Asian",
            Secondary: "Rice",
            Image: "fried-rice.jpg",
            Count: 4
        }
    ]
});