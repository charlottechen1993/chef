app.controller("recipesCtrl", function($scope) {
    $scope.recipes = [
        {
            Title: "Bibimbap",
            Description: "This is very tasty",
            PrimaryTitle: "Dishes",
            SecondTitle: ["Korean","Japanese"],
            Image: "bibimbap.jpg",
            Count: 2,
            LastCooked: "2015-08-10"
        },{
            Title: "Classic burger",
            Description: "Very rich in flavor",
            PrimaryTitle: "Dishes",
            SecondTitle: "American",
            Image: "burger.jpeg",
            Count: 8,
            LastCooked: "2016-07-10"
        },{
            Title: "Chinese Fried Rice",
            Description: "Good for lunch and dinner",
            PrimaryTitle: "Dishes",
            SecondTitle: "Chinese",
            Image: "fried-rice.jpg",
            Count: 1,
            LastCooked: "2016-06-18"
        },{
            Title: "Chinese Fried Rice",
            Description: "Good for lunch and dinner",
            PrimaryTitle: "Dishes",
            SecondTitle: "Chinese",
            Image: "fried-rice.jpg",
            Count: 1,
            LastCooked: "2016-08-10"
        }
    ]
    
    // change ordering
    $scope.orderProp = 'Count';
    $scope.myFunc = function(value){
        $scope.orderProp = value;
    }
});