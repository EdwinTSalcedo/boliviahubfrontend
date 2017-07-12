(function() {
    'use strict';

    angular.module('BoliviaHubFrontend.pages.dashboard')
        .controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

    var urlBackend = 'https://test.adsib.gob.bo/api_backend/api/proyectos/?incluir=repositorio&atributos=repositorio.tipo';

        /** @ngInject */
    function DashboardPieChartCtrl($scope, $timeout, $http, baConfig, baUtil) {

             

        $scope.getProyectos = function() {
            $http.get(urlBackend).then(
                function(data) {
                    data = data.data;
                    var proyecto = {};

                    $scope.gitlabrepos = 0;
                    $scope.githubrepos = 0;
                    $scope.bitbucketrepos = 0;
                    $scope.subversionrepos = 0;
                    $scope.total = 0;

                    if (data.datos) {
                        data.datos.forEach(function(proy) {

                            proyecto = {
                                tipo: 'gitlab',
                            };

                            switch (proyecto.tipo)
                            {
                               case 'gitlab':
                                $scope.gitlabrepos = $scope.gitlabrepos + 1;
                                break;
                               case "github":
                                $scope.githubrepos = $scope.githubrepos + 1;
                                break;
                               case "bitbucket":
                                $scope.bitbucketrepos = $scope.bitbucketrepos + 1;
                                break; 
                               case "subversion": 
                                $scope.subversionrepos = $scope.subversionrepos + 1;
                                break;
                               default: 
                                   console.log(proyecto.tipo);
                            }
                            $scope.total = $scope.total + 1;
                        })
                    }

                    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
                    $scope.charts = [{
                        color: pieColor,
                        description: 'Gitlab',
                        stats: $scope.gitlabrepos,
                        icon: 'gitlab',
                    }, 
                    {
                        color: pieColor,
                        description: 'Github',
                        stats: $scope.githubrepos,
                        icon: 'github',
                    }, {
                        color: pieColor,
                        description: 'Bitbucket',
                        stats: $scope.bitbucketrepos,
                        icon: 'bitbucket',
                    }];
                }
            ).catch(function(err) {
                console.log(err);
            });
        };
        $scope.getProyectos();

        

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        function loadPieCharts() {
            $('.chart').each(function() {
                var chart = $(this);
                chart.easyPieChart({
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    },
                    barColor: 'rgba(0,0,0,0.3 )',
                    trackColor: 'rgba(0,0,0,0)',
                    size: 85,
                    scaleLength: 0,
                    animation: 2000,
                    lineWidth: 9,
                    lineCap: 'round',
                });
            });

            $('.refresh-data').on('click', function() {
                updatePieCharts();
            });
        }

        function updatePieCharts() {
            // $('.pie-charts .chart1').each(function(index, chart1) {
            //     $(chart1).data('easyPieChart').update(48);
            // });
        }

        $timeout(function() {
            loadPieCharts();
            updatePieCharts();
        }, 1000);
    }
})();
