var app = angular.module("myApp", [])
app.controller("parentCtrl", function($scope, $rootScope) {
    $scope.value1 = ''
    $scope.keyevent = function(evt) {
        $scope.$broadcast("myparentdata", $scope.parentvalue);
    }
    $scope.$on("childdata", function(evt, data) {
        $scope.parentvalue = data;
    })

});

app.controller("childCtrl", function($scope, $rootScope) {
    $scope.$on("myparentdata", function(evt, data) {
        $scope.childvalue = data;
    });
    $scope.keyevent = function(evt) {
        $scope.$emit("childdata", $scope.childvalue);
    }

});

app.controller('Ctrl1', function($scope, $rootScope) {

    $rootScope.obj = {
        value: ""
    }
});

app.controller('Ctrl2', function($scope, $rootScope) {
        
    $rootScope.obj = {
        value: ""
    }
});