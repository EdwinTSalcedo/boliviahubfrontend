/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
  'use strict';

  angular.module('BoliviaHubFrontend.pages.proyectos')
    .controller('addProyectoCtrl', addProyectoCtrl);

  /** @ngInject */
  function addProyectoCtrl($scope, $uibModalInstance) {
      $scope.usuario = {
          nombre:'',
          email:'',
          usuario:'',
          direccion:'',
          contrasena:''
      };
    /*  $scope.email = '';
      $scope.usuario = '';
      $scope.contrasena = '';
*/
    $scope.link = '';
    $scope.ok = function () {
      $uibModalInstance.close($scope.link);
    };

    $scope.addUser = function(usuario){
        var nombre = usuario.nombre;
        var email = usuario.email;
        var usuario = usuario.usuario1;
        var contrasena2 = usuario.contrasena;
        console.log(nombre+' - '+email+' - '+usuario+' - '+contrasena2+' - '+usuario.direccion);
    }
  }

})();