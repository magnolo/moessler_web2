(function() {

    'use strict';

    angular
        .module('app.sliders')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'sliders',
                config: {
                    url: '/admin/sliders',
                    templateUrl: '/admin/views/admin.sliders.index',
                    controller: 'SlidersController',
                    controllerAs: 'vm',
                    title: 'Sliders'
                }
            },
            {
                state: 'sliders-create',
                config: {
                    url: '/admin/sliders/create',
                    templateUrl: '/admin/views/admin.sliders.create',
                    controller: 'SlidersController',
                    controllerAs: 'vm',
                    title: 'Create Sliders'
                }
            },
            {
                state: 'sliders-edit',
                config: {
                    url: '/admin/sliders/:id/edit',
                    templateUrl: '/admin/views/admin.sliders.edit',
                    controller: 'SlidersController',
                    controllerAs: 'vm',
                    title: 'Edit Sliders'
                }
            }
        ];
    }
})();
