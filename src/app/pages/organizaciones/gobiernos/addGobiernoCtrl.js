/*
(function () {
  'use strict';

  angular.module('BoliviaHubFrontend.pages.organizaciones')
    .controller('addGobiernoCtrl',function addGobiernoCtrl($scope,$uibModalInstance) {
      $scope.link = '';
      $scope.ok = function () {
        $uibModalInstance.close($scope.link);
      };

      $scope.gobierno = {'imageUrl':'','nombre':'','pais':'','cantidad':'','linkGov':''};
      $scope.addGobierno = function(gobierno){
        var i = 3;
        $scope.governments.push({'_id':i,'imageUrl':gobierno.imageUrl,'nombre':gobierno.nombre,'pais':gobierno.pais,'cantidad':gobierno.cantidad,'linkGov':gobierno.linkGov});
        i++;

    } 
  }).controller('editGobiernoCtrl',function editGobiernoCtrl($scope,$uibModalInstance) {

      $scope.link = ''; 
      $scope.ok = function () {
        $uibModalInstance.close($scope.link);
      };
      //console.log($scope.gobierno);
      $scope.editGobierno = function(usuario){
        
      } 
  });

})();*/