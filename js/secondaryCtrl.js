app.controller("secondaryCtrl", function($scope) {
    
    $scope.foodType = "";
    
    $scope.secondType = [
        {
            secondTitle: "All",
            Number: 4
        },{
            secondTitle: "Chinese",
            Number: 2
        },{
            secondTitle: "American",
            Number: 1
        },{
            secondTitle: "Korean",
            Number: 1
        },{
            secondTitle: "Japanese",
            Number: 1
        },{
            secondTitle: "Mexican",
            Number: 1
        },
    ]
    
    $scope.setFoodType = function(food){
        if(food=="All")
            $scope.foodType = "";
        else
            $scope.foodType = food;
    }
});