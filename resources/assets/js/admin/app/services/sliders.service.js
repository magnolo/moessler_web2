(function() {

    'use strict';

    angular
        .module("app.services")
        .factory("Sliders", Sliders);

    Sliders.$inject = ['$resource'];
    /* @ngInject */
    function Sliders($resource) {
        return $resource('/admin/api/sliders/:id', {id: '@_id'}, {
            update: {
                method: 'PUT'
            }
        });
    }

}());
