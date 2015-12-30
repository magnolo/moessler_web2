(function() {

    'use strict';

    angular
        .module('app.pages')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'pages',
                config: {
                    url: '/admin/pages',
                    templateUrl: '/admin/views/admin.pages.index',
                    controller: 'PagesController',
                    controllerAs: 'vm',
                    title: 'Pages'
                }
            },
            {
                state: 'pages-create',
                config: {
                    url: '/admin/pages/create',
                    templateUrl: '/admin/views/admin.pages.create',
                    controller: 'PagesController',
                    controllerAs: 'vm',
                    title: 'Create Pages'
                }
            },
            {
                state: 'pages-edit',
                config: {
                    url: '/admin/pages/:id/edit',
                    templateUrl: '/admin/views/admin.pages.edit',
                    controller: 'PagesController',
                    controllerAs: 'vm',
                    title: 'Edit Pages'
                }
            }
        ];
    }
})();
