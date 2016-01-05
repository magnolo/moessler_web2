(function() {

    'use strict';

    angular
        .module("app.services")
        .factory("Events", Events);

    Events.$inject = ['$resource'];
    /* @ngInject */
    function Events($resource) {
        return $resource('/admin/api/events/:id', {id: '@_id'}, {
            update: {
                method: 'PUT'
            }
        });
    }

}());
