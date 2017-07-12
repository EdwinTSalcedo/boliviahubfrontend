/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';





    angular.module('BoliviaHubFrontend.pages.login')
        .controller('LoginPageCtrl', LoginPageCtrl);

        

    /** @ngInject */
    function LoginPageCtrl($scope, fileReader, $filter, $uibModal, $http, $state) {
      console.log($state.current);
      /*state('profile', {
          url: '/profile',
          title: 'Profile',
          templateUrl: 'app/pages/profile/profile.html',
          controller: 'ProfilePageCtrl',
          resolve:{
                 keycloak: function(keycloak){
                 return keycloak.getKeycloak();
                }
          }
        });*/
    }


})();
