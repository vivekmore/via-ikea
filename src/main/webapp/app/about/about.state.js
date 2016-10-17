(function() {
    'use strict';

    angular
        .module('viaikeaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('about', {
            parent: 'app',
            url: '/about',
            data: {
                authorities: [],
                pageTitle: 'global.menu.about'
            },
            views: {
                'content@': {
                    templateUrl: 'app/about/about.html',
                    controller: 'AboutController',
                    controllerAs: 'aboutVm'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('about');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
