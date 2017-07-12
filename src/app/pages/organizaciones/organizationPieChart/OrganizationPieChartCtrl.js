/**
 * @author v.degel
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BoliviaHubFrontend.pages.organizaciones')
    .controller('OrganizationPieChartCtrl', OrganizationPieChartCtrl);
var urlBackend = 'https://test.adsib.gob.bo/api_backend/api/proyectos/?incluir=repositorio&atributos=repositorio.tipo';


  /** @ngInject */
  function OrganizationPieChartCtrl($element, layoutPaths, baConfig) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var pieChart = AmCharts.makeChart(id, {
      type: 'pie',
      startDuration: 0,
      theme: 'blur',
      addClassNames: true,
      color: layoutColors.borderDark,
      labelTickColor: layoutColors.borderDark,
      legend: {
        position: 'right',
        marginRight: 100,
        autoMargins: false,
      },
      innerRadius: '40%',
      defs: {
        filter: [
          {
            id: 'shadow',
            width: '200%',
            height: '200%',
            feOffset: {
              result: 'offOut',
              in: 'SourceAlpha',
              dx: 0,
              dy: 0
            },
            feGaussianBlur: {
              result: 'blurOut',
              in: 'offOut',
              stdDeviation: 5
            },
            feBlend: {
              in: 'SourceGraphic',
              in2: 'blurOut',
              mode: 'normal'
            }
          }
        ]
      },
      dataProvider: [
        {
          nameOrganization: 'Gobierno de la República Argentina',
          commits: 9
        },
        {
          nameOrganization: 'Digital Transformation Office - Australia',
          commits: 90
        },
        {
          nameOrganization: 'ADSIB - Bolivia',
          commits: 20
        },
        {
          nameOrganization: 'Alta Consejería Distrital de TIC - Colombia',
          commits: 11
        },
        {
          nameOrganization: 'GeoBolivia - Bolivia',
          commits: 15
        },
        {
          nameOrganization: 'Governo Eletrônico - Brasil',
          commits: 11
        },
        {
          nameOrganization: 'Instituto Nacional de Meteorología e Hidrología - Ecuador',
          commits: 7
        }
      ],
      valueField: 'commits',
      titleField: 'nameOrganization',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-left',

      autoMargins: false,
      marginTop: 10,
      alpha: 0.8,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      pullOutRadius: 0,
      pathToImages: layoutPaths.images.amChart,
      responsive: {
        enabled: true,
        rules: [
          // at 900px wide, we hide legend
          {
            maxWidth: 900,
            overrides: {
              legend: {
                enabled: false
              }
            }
          },

          // at 200 px we hide value axis labels altogether
          {
            maxWidth: 200,
            overrides: {
              valueAxes: {
                labelsEnabled: false
              },
              marginTop: 30,
              marginBottom: 30,
              marginLeft: 30,
              marginRight: 30
            }
          }
        ]
      }
    });

    pieChart.addListener('init', handleInit);

    pieChart.addListener('rollOverSlice', function (e) {
      handleRollOver(e);
    });

    function handleInit() {
      pieChart.legend.addListener('rollOverItem', handleRollOver);
    }

    function handleRollOver(e) {
      var wedge = e.dataItem.wedge.node;
      wedge.parentNode.appendChild(wedge);
    }
  }

})();
