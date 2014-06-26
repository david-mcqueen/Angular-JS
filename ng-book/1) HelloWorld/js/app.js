/**
 * Created by Dave on 10/06/2014.
 */

function MyController($scope){
    $scope.clock = {
        now: new Date()
    };
    var UpdateClock = function(){
        $scope.clock.now = new Date();
    };
    setInterval(function(){
        $scope.$apply(UpdateClock);
    },1000);

    UpdateClock();
};