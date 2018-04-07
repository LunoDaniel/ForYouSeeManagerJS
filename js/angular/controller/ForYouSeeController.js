forYouSeeApp.controller('ForYouSeeController', function($scope, $http) {
    
    $scope.mediaDataList = new Array();
    
    var url = 'https://private-7cf60-4youseesocialtest.apiary-mock.com/timeline';

    $http.get(url)
        .then(function( response ){
            $scope.mediaDataList = response.data;
        })
        .catch(function( err ){});

});