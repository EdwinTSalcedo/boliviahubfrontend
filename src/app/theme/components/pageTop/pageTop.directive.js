/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BoliviaHubFrontend.theme.components')
        .directive('pageTop', pageTop);

    /** @ngInject */
    function pageTop($timeout) {
        var jqWindow = $(window);
        return {
            restrict: 'E',
            controller: 'pageTopCtrl',
            templateUrl: 'app/theme/components/pageTop/pageTop.html',
            link: function(scope, el) {
                scope.menuHeight = el[0].childNodes[0].clientHeight - 84;
                //console.log(scope.menuHeight);
            }
        };
    }

})();