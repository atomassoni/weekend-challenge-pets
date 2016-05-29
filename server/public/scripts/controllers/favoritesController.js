myApp.controller('FavoritesController', ['$scope', '$http', function($scope, $http) {
  var key = '5433d627c0c62b99a9af9fbbe4227a02';
  var baseURL = 'http://api.petfinder.com/';
$scope.favorites = [];
$scope.fullDescription = '';
$scope.numFavorites = '';

//$scope.thisPet = '';

getFavorites();
getNumFavorites();

// $scope.getPet = function (petId) {
// console.log(petId);
//   var query = 'pet.get';
//   query += '?key=' + key;
//   query += '&id=' + petId;
//   query += '&output=basic';
//   query += '&format=json';
//
//   var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//
//   $http.jsonp(request).then(
//     function(response) {
//     console.log(response.data);
//       $scope.fullDescription = response.data.petfinder.pet.description.$t;
//       //$scope.thisPet = response.data.petfinder.pet.id.$t;
//     }
//   )
//
// }


  $scope.deleteFavorite = function (id) {
    if (confirm("Remove favorite?")){
    $http.delete('/favorites/' + id)
      .then(function (response) {

        getFavorites();
        getNumFavorites();

      });
    }
  };
//gets all the favorites
  function getFavorites() {
    $http.get('/favorites')
      .then(function (response) {
        $scope.favorites = response.data;
        console.log('GET /favorites ', response.data);
      });
  }
//gets the number of favorites from the databases
  function getNumFavorites () {
    $http.get('/pets')
      .then(function (response) {
        $scope.numFavorites = response.data.numFavorites;
        console.log('GET /pets ', response.data);
      });
  }




}]);
