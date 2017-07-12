/**
 * @author tnina@adsib.gob.bo
 * created on 07.04.2017
 */
(function () {
    'use strict';

    var url = 'http://192.168.1.171:3000/api/usuarios/';
    var urlOrganizaciones = 'http://192.168.40.187/api_backend/api/organizaciones';


    
    angular.module('BoliviaHubFrontend.pages.organizaciones')
        .controller('OrganizacionesPageCtrl', OrganizacionesPageCtrl)
        .controller('addGobiernoCtrl', addGobiernoCtrl)
        .controller('editGobiernoCtrl', editGobiernoCtrl)
       /* .factory('organizaciones', ['$http', function($http){
            return {
                getOrganizaciones: function() {
                    return $http.get(urlOrganizaciones);
                }
            };

        /*   var organizaciones = {
            governments: [
                   {
                        imageUrl: "https://avatars1.githubusercontent.com/u/16244902?v=3&s=200",
                        nombre: "Gobierno de la República Argentina",
                        pais: "Argentina",
                        cantidad: 9,
                        linkGov:"https://github.com/argob"
                    },{
                        imageUrl: "https://avatars2.githubusercontent.com/u/11763427?v=3&s=200",
                        nombre: "Digital Transformation Office",
                        pais: "Australia",
                        cantidad:90,
                        linkGov:"https://github.com/ausdto"
                    }             
                ]
                }
               // return organizaciones;
        }]);*/


    


    function OrganizacionesPageCtrl($scope, fileReader, $filter,  $http,$state) {
        $scope.campoBusqueda = 'nombre'; // Establecer el tipo de clasificación predeterminado
        $scope.ordenListado = false; // Establecer el orden de clasificación predeterminado
        $scope.terminoBusqueda = ''; // Establecer el término de búsqueda / filtro predeterminado
        $scope.registrosPorPagina = 2; //registros por página
        
        $scope.organizaciones = [];

        /*var handleSuccess = function(data, status) {
            $scope.organizaciones = data;
            console.log($scope.organizaciones);
        };*/

        //organizaciones.getOrganizaciones().success(handleSuccess);
        $scope.getOrganizaciones = function () {
            $http.get(urlOrganizaciones).then(
                function (data) {
                    data = data.data;
                    if (data) {
                        $scope.organizaciones = [];
                        data.forEach(function (dOrganizacion) {
                            $scope.organizaciones.push(dOrganizacion);
                        });
                    } else {
                        $scope.organizaciones.push(organizacionTemp);
                    }
                }
            ).catch(function (err) {
                console.log(err);
            });
        };
        
         $scope.getOrganizaciones();
       /* $scope.picture = $filter('profilePicture')('email');
        $scope.removePicture = function () {
            $scope.picture = $filter('appImage')('theme/no-photo.png');
            $scope.noPicture = true;
        };

        $scope.uploadPicture = function () {
            var fileInput = document.getElementById('uploadFile');
            fileInput.click();

        };

        $scope.perfilesAsociados = [{
            name: 'GitHub',
            href: 'https://github.com/demo',
            icon: 'socicon-github'
        }, {
            name: 'GitLab',
            href: 'https://gitlab.geo.gob.bo/demo',
            icon: 'socicon-gitlab'
        }, {
            name: 'GIT',
            icon: 'socicon-stackoverflow'
        }, {
            name: 'Subversion',
            icon: 'socicon-stackoverflow'
        }, {
            name: 'Mercurial',
            icon: 'socicon-stackoverflow'
        }];
        $scope.unconnect = function (item) {
            item.href = undefined;
        };
        $scope.showModal = function (item) {
            $uibModal.open({
                animation: false,
                controller: 'ProfileModalCtrl',
                templateUrl: 'app/pages/profile/profileModal.html'
            }).result.then(function (link) {
                item.href = link;
            });
        };
        $scope.getFile = function () {
            fileReader.readAsDataUrl($scope.file, $scope)
                .then(function (result) {
                    $scope.picture = result;
                });
        };
        
       $scope.switches = [true, true, false, true, true, false];
        if($scope.governments){

        }else{
             $scope.governments = [
            {
                imageUrl: "https://avatars1.githubusercontent.com/u/16244902?v=3&s=200",
                nombre: "Gobierno de la República Argentina",
                pais: "Argentina",
                cantidad: 9,
                linkGov:"https://github.com/argob"
            },{
                imageUrl: "https://avatars2.githubusercontent.com/u/11763427?v=3&s=200",
                nombre: "Digital Transformation Office",
                pais: "Australia",
                cantidad:90,
                linkGov:"https://github.com/ausdto"
            }];
        }
       

        console.log($scope.governments);
*/

        /*,{
            imageUrl: "https://avatars3.githubusercontent.com/u/4256598?v=3&s=200",
            nombre: "Open Police",
            pais: "Belgica",
            cantidad: 5,
            linkGov:"https://github.com/belgianpolice"
        },{
            imageUrl: "https://avatars0.githubusercontent.com/u/9283696?v=3&s=200",
            nombre: "ADSIB",
            pais: "Bolivia",
            cantidad: 20,
            linkGov:"https://github.com/adsib"
        },{
            imageUrl: "https://avatars3.githubusercontent.com/u/2715406?v=3&s=200",
            nombre: "GeoBolivia",
            pais: "Bolivia",
            cantidad: 15,
            linkGov:"https://github.com/geobolivia"
        },{
            imageUrl: "https://avatars2.githubusercontent.com/u/7524832?v=3&s=200",
            nombre: "Governo Eletrônico",
            pais: "Brasil",
            cantidad: 11,
            linkGov:"https://github.com/govbr"
        },{
            imageUrl: "https://avatars1.githubusercontent.com/u/6223860?v=3&s=200",
            nombre: "Alta Consejería Distrital de TIC",
            pais: "Colombia",
            cantidad: 16,
            linkGov:"https://github.com/AltaConsejeriaTIC"
        },{
            imageUrl: "https://avatars0.githubusercontent.com/u/11179227?v=3&s=200",
            nombre: "Instituto Nacional de Meteorología e Hidrología",
            pais: "Ecuador",
            cantidad: 7,
            linkGov:"https://github.com/inamhi"
        }*/


        $scope.eliminar = function(_id, index){
            $scope.organizaciones.splice(index,1);     
            console.log(_id+' - '+index);
            $http.delete(urlOrganizaciones+'/'+_id);
        }
    }   


    /** @ngInject */
    function addGobiernoCtrl($scope, $http, $state,$location) {
      $scope.organizacion = {'imageUrl':'','nombre':'','pais':'','cantidad':'','linkGov':''};
      $scope.addOrganizacion = function(){
        $scope.organizaciones.push($scope.organizacion);
        $http.post(urlOrganizaciones,$scope.organizacion);
        $location.url('/organizaciones');
        
      }
    }

    function editGobiernoCtrl($scope, $stateParams, $http,$state, $location) {
        //http://192.168.1.178:8080/auth/realms/master/protocol/openid-connect/userinfo
      //$scope.gobierno = organizaciones.governments[$stateParams.id];
      $scope.organizaciones.forEach(function (orgVar) {
        if(orgVar.nombre == $stateParams.id){
            $scope.organizacion = orgVar;
        }
      });
      //$scope.organizacion = $scope.organizaciones[$stateParams.id];

      console.log($stateParams.id);
      $scope.editOrganizacion = function(organizacion){
           $scope.organizaciones[$stateParams.id] = organizacion;
           $http.put(urlOrganizaciones+'/'+organizacion._id,organizacion);
           //$state.go('organizaciones.listar', {},{reload:true});
           $location.url('/organizaciones');
        }
    }
})();

  