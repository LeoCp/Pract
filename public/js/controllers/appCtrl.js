angular.module("app")

  .controller("appCtrl",function ($scope,$http) {
    var num,years,audioFile
    ,rand = () => {
      return Math.floor(Math.random() * (12+1));
    }

    ,sort = () => {
      $http.get('/years').then((res) => {
        years = res.data;
        num = rand ();
        audioFile = years[num].audio;
        var audio = new Audio(audioFile);
        audio.play();
        $scope.ano = years[num].pt;
      });
    };sort();

    $scope.valida = function ($event) {
      var x = window.event ? $event.keyCode : $event.which;
      if(x == 13) {

        if($scope.testeLeo == years[num].en){
          alert("ok ");
          $scope.testeLeo = "";
          sort();

        }else{
          alert("no ");
          $scope.testeLeo = "";
          sort();
        }

      }


    };

  });
