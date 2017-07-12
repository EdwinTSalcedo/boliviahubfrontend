/**
 * @author tnina@adsib.gob.bo
 * created on 11.04.2017
 */
(function() {
    'use strict';

    angular.module('BoliviaHubFrontend.theme')
        .service('preloader', preloader);

    /** @ngInject */
    function preloader($q) {
        return {
            loadImg: function(src) {
                var d = $q.defer();
                var img = new Image();
                img.src = src;
                img.onload = function() {
                    d.resolve();
                };
                return d.promise;
            },
            loadAmCharts: function() {
                var d = $q.defer();
                AmCharts.ready(function() {
                    d.resolve();
                });
                return d.promise;
            }
        }
    }

})();
