(function() {

    'use strict';

    angular
        .module('app.events')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'events',
                config: {
                    url: '/admin/events',
                    templateUrl: '/admin/views/admin.events.index',
                    controller: 'EventsController',
                    controllerAs: 'vm',
                    title: 'Events'
                }
            },
            {
                state: 'events-create',
                config: {
                    url: '/admin/events/create',
                    templateUrl: '/admin/views/admin.events.create',
                    controller: 'EventsController',
                    controllerAs: 'vm',
                    title: 'Create Events'
                }
            },
            {
                state: 'events-edit',
                config: {
                    url: '/admin/events/:id/edit',
                    templateUrl: '/admin/views/admin.events.edit',
                    controller: 'EventsController',
                    controllerAs: 'vm',
                    title: 'Edit Events'
                }
            }
        ];
    }
})();
