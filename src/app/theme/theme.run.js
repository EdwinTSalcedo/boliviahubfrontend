/**
 * @author tnina@adsib.gob.bo
 * Modificado: 12.04.2017
 */
(function() {
    'use strict';

    angular.module('BoliviaHubFrontend.theme')
        .run(themeRun);

    /** @ngInject */
    function themeRun($timeout, $rootScope, layoutPaths, preloader, $q, baSidebarService, themeLayoutSettings) {
        var whatToWait = [
            preloader.loadAmCharts(),
            $timeout(100)
        ];

        var theme = themeLayoutSettings;
        if (theme.blur) {
            if (theme.mobile) {
                whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'bg-mobile.jpg'));
            } else {
                whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'bg.jpg'));
                whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'bg-borroso.jpg'));
            }
        }

        $q.all(whatToWait).then(function() {
            $rootScope.$pageFinishedLoading = true;
        });

        $timeout(function() {
            if (!$rootScope.$pageFinishedLoading) {
                $rootScope.$pageFinishedLoading = true;
            }
        }, 7000);

        $rootScope.$baSidebarService = baSidebarService;
    }

})();
