'use strict';
/**
 * # MainCtrl
 * Controller of coolstuffApp
 */
angular.module('coolstuffApp')
  .controller('productsCtrl', function($scope, $location) {
    $scope.loadAll = false;
    $scope.rating = 4;
    $scope.limit= 7;
    $scope.noImage = {
       img : 'images/no_image_available.jpeg',
       addMore: 'images/plus.png'
    };

    // loadMore function
    $scope.loadMore = function() {
      $scope.loadAll = true;    
      $scope.limit = $scope.products.length
    };

    // Products list (we can call rest service and get the JSON data)
    $scope.products = [
        {
            Productname: 'Macallan 12',
            price: 50,
            img: 'https://com-cdn.coolstuff.com/autogen/preset/aspectThumb/480x360/b7cf8d1965fbf10db692740876dd2b2b.jpg',
            rating: 3
        },
        {
            Productname: 'Chivas Regal',
            price: 100,
            img: 'https://com-cdn.coolstuff.com/autogen/preset/aspectThumb/480x360/58da7addad4f15ce5aad1067bead40a5.jpg',
            rating: 2
        },
        {
            Productname: 'Glenfiddich',
            price: 200,
            img : 'https://com-cdn.coolstuff.com/autogen/preset/aspectThumb/480x360/42932db58ae1d009c2b250e7c37fb457.jpg',
            rating: 4
        },
        {
            Productname: 'Glenfiddich',
            price: 40,
            img : 'https://com-cdn.coolstuff.com/autogen/preset/aspectThumb/480x360/e887016a5f03170ee127e6ca3ee56423.jpg',
            rating: 1
        },
        {
            Productname: 'Glenfiddich',
            price: 20,
            img : 'https://com-cdn.coolstuff.com/autogen/preset/aspectThumb/480x360/4d025e47c423872488a10db6e0aa3d7e.jpg',
            rating: 5
        },
        {
            Productname: 'Glenfiddich',
            price: 90,
            img : 'https://com-cdn.coolstuff.com/autogen/preset/aspectThumb/480x360/747bae4e5234615b52557d334e16bb3c.jpg',
            rating: 3
        },
        {
            Productname: 'Glenfiddich 1937',
            price: 80,
            img : 'https://com-cdn.coolstuff.com/autogen/preset/aspectThumb/480x360/2c633cb183c02d81bca88957a62710de.jpg',
            rating: 1
        },
        {
            Productname: 'Chivas Regal',
            price: 100,
            img: 'https://com-cdn.coolstuff.com/autogen/preset/aspectThumb/480x360/58da7addad4f15ce5aad1067bead40a5.jpg',
            rating: 2
        },
        {
            Productname: 'Glenfiddich',
            price: 200,
            img : 'https://com-cdn.coolstuff.com/autogen/preset/aspectThumb/480x360/42932db58ae1d009c2b250e7c37fb457.jpg',
            rating: 4
        },
        {
            Productname: 'Glenfiddich',
            price: 40,
            img : 'https://com-cdn.coolstuff.com/autogen/preset/aspectThumb/480x360/e887016a5f03170ee127e6ca3ee56423.jpg',
            rating: 1
        },
        {
            Productname: 'Glenfiddich',
            price: 20,
            img : 'https://com-cdn.coolstuff.com/autogen/preset/aspectThumb/480x360/4d025e47c423872488a10db6e0aa3d7e.jpg',
            rating: 5
        },
        {
            Productname: 'Glenfiddich',
            price: 90,
            img : 'https://com-cdn.coolstuff.com/autogen/preset/aspectThumb/480x360/747bae4e5234615b52557d334e16bb3c.jpg',
            rating: 3
        },
        {
            Productname: 'Glenfiddich 1937',
            price: 80,
            img : 'https://com-cdn.coolstuff.com/autogen/preset/aspectThumb/480x360/2c633cb183c02d81bca88957a62710de.jpg',
            rating: 1
        }
    ]; 
  }).directive('productRating', function () {
    return {
      restrict: 'A',
      template: '<ul class="rating">' +
                  '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
                    '\u2605' +
                  '</li>' +
                '</ul>',
      scope: {
        ratingValue: '=',
        max: '=',
        readonly: '@',
        onRatingSelected: '&'
      },
      link: function (scope, elem, attrs) {

        var updateStars = function() {
          scope.stars = [];
          for (var  i = 0; i < scope.max; i++) {
            scope.stars.push({filled: i < scope.ratingValue});
          }
        };

        scope.toggle = function(index) {
          if (scope.readonly && scope.readonly === 'true') {
            return;
          }
          scope.ratingValue = index + 1;
          scope.onRatingSelected({rating: index + 1});
        };

        scope.$watch('ratingValue', function(oldVal, newVal) {
          if (newVal) {
            updateStars();
          }
        });
      }
    }
  });
