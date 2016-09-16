app.controller("primaryCtrl", function($scope) {
    
    $scope.category = []
    
    $scope.firstType = [
        {
            primaryTitle: "Dishes",
            Image: "primary-dish.jpg",
            Categories: [
                "Chinese",
                "American",
                "Korean",
                "Japanese",
                "Mexican"
            ],
            Number: 4
        },{
            primaryTitle: "Baked",
            Image: "primary-bake.jpg",
            Categories: [
                "Cake"
            ],
            Number: 0
        },{
            primaryTitle: "Drinks",
            Image: "primary-drink.jpg",
            Categories: [
                "Smoothies",
                "Mix Drinks",
            ],
            Number: 0
        }
    ]
    
    $scope.pullCategories = function(title){
        var curPrimaryTitle = title;
    }
});