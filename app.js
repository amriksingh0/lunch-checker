(function () {
  'use strict';
  angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchController);
        LunchController.$inject = ['$scope'];

        function LunchController($scope) {
            $scope.dishes="";
            $scope.message="";
            $scope.checked=false;
//the msg() function is used to check empty item
            $scope.msg=function () {
              if ($scope.dishes.includes(', ,')) {
                $scope.alert="* We do not consider an empty item, i.e. , ,";
                $scope.checked=false;
                }else if ($scope.dishes.includes(',,')) {
                  $scope.alert="* We do not consider an empty item, i.e. ,,";
                  $scope.checked=false;
                }else {
                    $scope.alert="";
                }
              }

            $scope.check = function () {
              if($scope.dishes.trim().length === 0){
                  $scope.empty=true;
              }else{
                $scope.checked=true;
                $scope.empty=false;
                var items = $scope.dishes.split(',')
                .filter(function(v){
                    return v.trim() !== '';
                  });

                if (items.length <= 3){
                    $scope.message = 'Enjoy!';
                }else{
                    $scope.message = 'Too much!';
                }
              }
        };
  }
})();
