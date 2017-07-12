/**
 * @author a.demeshko
 * created on 21.01.2016
 */
/*(function () {
  'use strict';

  angular.module('BoliviaHubFrontend.pages.usuarios')
    .controller('addUsuarioCtrl',function addUsuarioCtrl($scope,$uibModalInstance, $http) {
      var urlAdicionarUsuario = 'http://192.168.40.187/api_backend/api/usuarios';
      $scope.link = '';
      $scope.ok = function () {
        $uibModalInstance.close($scope.link);
      };
      $scope.usuario = {'nombre':'','email':''};
      //,'usuario':'','direccion':'','contrasena':''
      $scope.addUser = function(usuario){
          var i = 3;
          
          var req = {
            method: 'POST',
            url: urlAdicionarUsuario,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            withCredentials: true,
            data: { nombre: usuario.nombre, email:usuario.email}
          }

          $http(req).then(function(data){
            $scope.usuariosProyecto.push({'_id':i,'nombre':usuario.nombre,'email':usuario.email});
          //,'usuario':usuario.usuario,'direccion':usuario.direccion
          },function(){
            console.log('Algo salio mal');
          });          i++;
      } 
  }).controller('editUsuarioCtrl',function editUsuarioCtrl($scope,$uibModalInstance) {

      $scope.link = '';
      $scope.ok = function () {
        $uibModalInstance.close($scope.link);
      };
      console.log($scope.usuario);
      
      $scope.editUsuario = function(usuario){
        
      } 
  });

})();*/